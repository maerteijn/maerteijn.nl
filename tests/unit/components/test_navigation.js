import { assert } from "chai"

import modules from "../../../dist/test"

import { createComponent, resetState } from "../../utils"

import * as fixtures from "../../fixtures"

const store = modules.store

describe("Navigation component", () => {
  beforeEach(() => {
    resetState(store.state)
  })

  it("We can initialize a Navigation component", () => {
    const wrapper = createComponent(modules.Navigation)
    assert.equal(wrapper.name(), "navigation")
  })

  it("The navigation component renders a mobile menu", () => {
    const wrapper = createComponent(modules.Navigation)
    assert.isTrue(wrapper.find("svg").exists())
    assert.isTrue(wrapper.find(".menu-button").exists())
    assert.isTrue(wrapper.find(".menu-icon").exists())
  })

  it("And a navigation container with no items", () => {
    const wrapper = createComponent(modules.Navigation)
    assert.isFalse(wrapper.find(".navigation .item").exists())
  })
})

describe("Navigation component - extended", () => {
  beforeEach(function () {
    this.wrapper = createComponent(modules.Navigation)
    store.state.structure = JSON.parse(fixtures.structure_json)
    store.state.loaded = true
  })

  afterEach(function () {
    this.wrapper = null
    resetState(store.state)
  })

  it("The navigations component renders page links from the store correctly", function () {
    return this.wrapper.vm.$nextTick().then(() => {
      assert.isTrue(this.wrapper.find(".navigation").exists())

      // all pages except one (show_in_menu = false) should be in the
      // navigation menu
      const pages = this.wrapper.vm.$state.structure.pages
      const page_links = pages.filter((page) => page.show_in_menu)

      assert.equal(
        this.wrapper.findAll(".navigation .item").length,
        page_links.length
      )
    })
  })

  it("The pages computed property returns only pages with show_in_menu = true", function () {
    return this.wrapper.vm.$nextTick().then(() => {
      const pages = this.wrapper.vm.$state.structure.pages
      const page_links = pages.filter((page) => page.show_in_menu)

      assert.equal(this.wrapper.vm.pages.length, page_links.length)
    })
  })

  it("The pages computed property is immediately updated from the store", function () {
    this.wrapper.vm.$state.structure.pages = []
    return this.wrapper.vm.$nextTick().then(() => {
      assert.equal(this.wrapper.vm.pages.length, 0)
    })
  })
})
