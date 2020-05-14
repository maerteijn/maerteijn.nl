import { assert } from "chai"

import modules from "../../../dist/test"

import { createComponent, resetState } from "../../utils"

const store = modules.store

describe("Switch layout component", () => {
  afterEach(() => {
    resetState(store.state)
  })

  it("We can initialize a SwitchLayout component", () => {
    const wrapper = createComponent(modules.SwitchLayout)
    assert.equal(wrapper.name(), "switch-layout")
  })

  it("The toggleLayout method will update the state", () => {
    const wrapper = createComponent(modules.SwitchLayout)
    assert.equal(store.state.layout, "default-layout")
    wrapper.vm.toggleLayout()
    assert.equal(store.state.layout, "basic-layout")
    wrapper.vm.toggleLayout()
    assert.equal(store.state.layout, "default-layout")
  })

  it("The component renders a svg icon", () => {
    const wrapper = createComponent(modules.SwitchLayout)

    const icon = wrapper.find("div.icon")
    assert.include(icon.html(), "<svg")
  })

  it("Clicking the icon should emit the layout-toggled event", () => {
    const wrapper = createComponent(modules.SwitchLayout)
    wrapper.find("div.icon").trigger("click")
    assert.property(wrapper.emitted(), "layout-toggled")
  })
})
