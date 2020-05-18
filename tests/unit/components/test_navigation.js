import { assert } from "chai"

import modules from "../../../dist/test"

import {
  createComponentWithoutRouter,
  loadDefaultState,
  resetState,
} from "../../utils"

import * as fixtures from "../../fixtures"

const store = modules.store

describe("Navigation component", () => {
  beforeEach(() => {
    resetState(store.state)
  })

  it("We can initialize a Navigation component", () => {
    const wrapper = createComponentWithoutRouter(modules.Navigation)
    assert.equal(wrapper.name(), "navigation")
  })

  it("The navigation component renders a mobile menu", () => {
    const wrapper = createComponentWithoutRouter(modules.Navigation)
    assert.isTrue(wrapper.find("svg").exists())
    assert.isTrue(wrapper.find(".menu-button").exists())
    assert.isTrue(wrapper.find(".menu-icon").exists())
  })

  it("And a navigation container with no items", () => {
    const wrapper = createComponentWithoutRouter(modules.Navigation)
    assert.isFalse(wrapper.find(".navigation .item").exists())
  })
})

describe("Navigation component - extended", () => {
  beforeEach(function () {
    this.wrapper = createComponentWithoutRouter(modules.Navigation, {
      path: "/",
    })
    loadDefaultState(store.state)
  })

  afterEach(function () {
    this.wrapper.vm.$destroy()
    resetState(store.state)
  })

  it("The navigations component renders page links from the store correctly", function () {
    return this.wrapper.vm.$nextTick().then(() => {
      assert.isTrue(this.wrapper.find(".navigation").exists())

      // all pages except one (show_in_menu = false) should be in the
      // navigation menu
      const pages = this.wrapper.vm.$state.structure.pages
      const page_links = pages.filter((page) => page.settings.show_in_menu)

      assert.equal(
        this.wrapper.findAll(".navigation .item").length,
        page_links.length
      )
    })
  })

  it("The navigation component is language aware", function () {
    const language = "en"
    store.state.structure.pages[0].settings.language = language

    return this.wrapper.vm.$nextTick().then(() => {
      const pages = this.wrapper.vm.$state.structure.pages
      const page_links = pages.filter(
        (page) =>
          page.settings.show_in_menu && page.settings.language == language
      )
      assert.equal(this.wrapper.vm.pages.length, page_links.length)
    })
  })

  it("The pages computed property returns only pages with show_in_menu = true", function () {
    return this.wrapper.vm.$nextTick().then(() => {
      const pages = this.wrapper.vm.$state.structure.pages
      const page_links = pages.filter((page) => page.settings.show_in_menu)

      assert.equal(this.wrapper.vm.pages.length, page_links.length)
    })
  })

  it("The pages computed property is immediately updated from the store", function () {
    store.state.structure.pages = []
    return this.wrapper.vm.$nextTick().then(() => {
      assert.equal(this.wrapper.vm.pages.length, 0)
    })
  })
})
