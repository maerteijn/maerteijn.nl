import { assert } from "chai"

import { createComponent, resetState } from "../../utils"

import store from "@/js/store"
import SwitchLayout from "@/js/components/switch-layout"

describe("Switch layout component", () => {
  afterEach(() => {
    resetState(store.state)
    window.msCrypto = undefined
  })

  it("We can initialize a SwitchLayout component", () => {
    const wrapper = createComponent(SwitchLayout)
    assert.equal(wrapper.vm.$options.name, "switch-layout")
    assert.isTrue(wrapper.find(".switch-layout").exists())
  })

  it("The toggleLayout method will update the state", () => {
    const wrapper = createComponent(SwitchLayout)
    assert.equal(store.state.layout, "default-layout")
    wrapper.vm.toggleLayout()
    assert.equal(store.state.layout, "basic-layout")
    wrapper.vm.toggleLayout()
    assert.equal(store.state.layout, "default-layout")
  })

  it("The component renders a svg icon", () => {
    const wrapper = createComponent(SwitchLayout)

    const icon = wrapper.find("div.icon")
    assert.include(icon.html(), "<svg")
  })

  it("Clicking the icon should emit the layout-toggled event", () => {
    const wrapper = createComponent(SwitchLayout)
    wrapper.find("div.icon").trigger("click")
    assert.property(wrapper.emitted(), "layout-toggled")
  })

  it("The component is not rendered when on IE11", () => {
    window.msCrypto = "something"
    const wrapper = createComponent(SwitchLayout)
    assert.isFalse(wrapper.find(".switch-layout").exists())
  })
})
