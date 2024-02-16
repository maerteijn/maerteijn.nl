import { assert } from "vitest"
import sinon from "sinon"

import { createWrapperForComponent } from "../../utils"

import * as fixtures from "../../fixtures"

import Logo from "@/js/components/logo"

describe("Logo component", () => {
  it("We can initialize a Logo component", () => {
    const wrapper = createWrapperForComponent(Logo)
    assert.equal(wrapper.vm.$options.name, "logo")
    wrapper.unmount()
  })

  it("The logo component renders a desktop and mobile version", () => {
    const wrapper = createWrapperForComponent(Logo)
    assert.isTrue(wrapper.find(".logo-container figure.desktop").exists())
    assert.isTrue(wrapper.find(".logo-container figure.mobile").exists())
    wrapper.unmount()
  })

  it("We can initialize a simplified Logo component", () => {
    const wrapper = createWrapperForComponent(Logo, { mode: "small" })
    assert.equal(wrapper.vm.$options.name, "logo")
    assert.isTrue(wrapper.find(".logo figure.logo").exists())
    wrapper.unmount()
  })

  it("The Logo component just has two modes: 'full' and 'small'", () => {
    const validator = Logo.props.mode.validator
    assert.isTrue(validator("full"))
    assert.isTrue(validator("small"))
    assert.isFalse(validator("non-existant"))
  })
})

describe("Logo component - extended", () => {
  let wrapper

  beforeEach(() => {
    wrapper = createWrapperForComponent(Logo)
    wrapper.vm.$state.site = JSON.parse(fixtures.site_json)
    wrapper.vm.$state.loaded = true
  })

  afterEach(function () {
    wrapper.unmount()
  })

  it("The logo component renders icons from the store correctly", function () {
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".icons").exists())

      // all icons loaded in the store should be rendered
      const logo_links = wrapper.vm.$state.site.logo_links
      assert.equal(wrapper.findAll(".icons .item").length, logo_links.length)
    })
  })

  it("The links computed property returns items from the store", function () {
    return wrapper.vm.$nextTick().then(() => {
      const logo_links = wrapper.vm.$state.site.logo_links
      assert.equal(wrapper.vm.links.length, logo_links.length)
    })
  })

  it("The links computed property is immediately updated from the store", function () {
    wrapper.vm.$state.site.logo_links = []
    return wrapper.vm.$nextTick().then(() => {
      assert.equal(wrapper.vm.links.length, 0)
    })
  })

  it("Clicking the logo will navigate to the root page", function () {
    wrapper.vm.goHome = sinon.spy(wrapper.vm.goHome)
    const logo = wrapper.find("figure.mobile img")
    logo.trigger("click")

    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.vm.goHome.called)
      sinon.restore()
    })
  })
})
