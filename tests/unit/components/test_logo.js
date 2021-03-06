import { assert } from "chai"
import sinon from "sinon"

import { createComponentWithoutRouter } from "../../utils"

import * as fixtures from "../../fixtures"

import Logo from "@/js/components/logo"

describe("Logo component", () => {
  it("We can initialize a Logo component", () => {
    const wrapper = createComponentWithoutRouter(Logo)
    assert.equal(wrapper.vm.$options.name, "logo")
  })

  it("The logo component renders a desktop and mobile version", () => {
    const wrapper = createComponentWithoutRouter(Logo)
    assert.isTrue(wrapper.find(".logo-container figure.desktop").exists())
    assert.isTrue(wrapper.find(".logo-container figure.mobile").exists())
  })
})

describe("Logo component - extended", () => {
  beforeEach(function () {
    this.wrapper = createComponentWithoutRouter(Logo)
    this.wrapper.vm.$state.site = JSON.parse(fixtures.site_json)
    this.wrapper.vm.$state.loaded = true
  })

  afterEach(function () {
    this.wrapper.vm.$destroy()
  })

  it("The logo component renders icons from the store correctly", function () {
    return this.wrapper.vm.$nextTick().then(() => {
      assert.isTrue(this.wrapper.find(".icons").exists())

      // all icons loaded in the store should be rendered
      const logo_links = this.wrapper.vm.$state.site.logo_links
      assert.equal(
        this.wrapper.findAll(".icons .item").length,
        logo_links.length
      )
    })
  })

  it("The links computed property returns items from the store", function () {
    return this.wrapper.vm.$nextTick().then(() => {
      const logo_links = this.wrapper.vm.$state.site.logo_links
      assert.equal(this.wrapper.vm.links.length, logo_links.length)
    })
  })

  it("The links computed property is immediately updated from the store", function () {
    this.wrapper.vm.$state.site.logo_links = []
    return this.wrapper.vm.$nextTick().then(() => {
      assert.equal(this.wrapper.vm.links.length, 0)
    })
  })

  it("Clicking the logo will navigate to the root page", function () {
    this.wrapper.vm.goHome = sinon.spy(this.wrapper.vm.goHome)
    const logo = this.wrapper.find("figure.mobile img")
    logo.trigger("click")

    return this.wrapper.vm.$nextTick().then(() => {
      assert.isTrue(this.wrapper.vm.goHome.called)
      sinon.restore()
    })
  })
})
