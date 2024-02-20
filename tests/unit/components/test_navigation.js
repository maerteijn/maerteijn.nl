import { assert } from "vitest"

import {
  createWrapperForComponent,
  loadDefaultState,
  resetState,
} from "../../utils"

import store from "@/js/store"
import Navigation from "@/js/components/navigation"

describe("Navigation component", () => {
  beforeEach(() => {
    resetState(store.state)
  })

  it("We can initialize a Navigation component", () => {
    const wrapper = createWrapperForComponent(Navigation)
    assert.equal(wrapper.vm.$options.name, "navigation")
    wrapper.unmount()
  })

  it("The navigation component renders a mobile menu", () => {
    const wrapper = createWrapperForComponent(Navigation)
    assert.isTrue(wrapper.find("svg").exists())
    assert.isTrue(wrapper.find(".menu-button").exists())
    assert.isTrue(wrapper.find(".menu-icon").exists())
    wrapper.unmount()
  })

  it("And a navigation container with no items", () => {
    const wrapper = createWrapperForComponent(Navigation)
    assert.isFalse(wrapper.find(".navigation .item").exists())
    wrapper.unmount()
  })
})

describe("Navigation component - extended", () => {
  let wrapper

  beforeEach(() => {
    wrapper = createWrapperForComponent(
      Navigation,
      {},
      {
        path: "/",
      }
    )
    loadDefaultState(store.state)
  })

  afterEach(function () {
    wrapper.unmount()
    resetState(store.state)
  })

  it("The navigations component renders page links from the store correctly", function () {
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".navigation").exists())

      const pages = store.getters.getPagesForNavigation(wrapper.vm.$route.path)

      assert.lengthOf(wrapper.findAll(".navigation .item"), pages.length)
    })
  })

  it("The navigation component is language aware", function () {
    store.state.site.pages[0].settings.language = "en"
    const pages = store.getters.getPagesForNavigation(wrapper.vm.$route.path)

    return wrapper.vm.$nextTick().then(() => {
      // and now it's only one
      assert.lengthOf(wrapper.vm.pages, pages.length)
    })
  })

  it("The pages computed property returns only pages with show_in_menu = true", function () {
    return wrapper.vm.$nextTick().then(() => {
      const pages = store.getters.getPagesForNavigation(wrapper.vm.$route.path)
      assert.lengthOf(wrapper.vm.pages, pages.length)
    })
  })

  it("The pages computed property is immediately updated from the store", function () {
    store.state.site.pages = []
    return wrapper.vm.$nextTick().then(() => {
      assert.equal(wrapper.vm.pages.length, 0)
    })
  })
})
