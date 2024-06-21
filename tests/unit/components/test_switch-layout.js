import { assert } from "vitest"

import { createWrapperForComponent, resetState } from "../../utils"

import store from "@/js/store"
import SwitchLayout from "@/js/components/switch-layout"

describe("Switch layout component", () => {
  beforeEach(() => {
    resetState(store.state)
  })
  afterEach(() => {
    resetState(store.state)
    window.msCrypto = undefined
  })

  it("We can initialize a SwitchLayout component", () => {
    const wrapper = createWrapperForComponent(SwitchLayout)
    assert.equal(wrapper.vm.$options.name, "switch-layout")
    assert.isTrue(wrapper.find(".switch-layout").exists())
    wrapper.unmount()
  })

  it("The toggleLayout method will update the state", () => {
    const wrapper = createWrapperForComponent(SwitchLayout)
    assert.equal(store.state.layout, "default-layout")
    wrapper.vm.toggleLayout()
    assert.equal(store.state.layout, "basic-layout")
    wrapper.vm.toggleLayout()
    assert.equal(store.state.layout, "default-layout")
    wrapper.unmount()
  })

  it("The component renders a svg icon", () => {
    const wrapper = createWrapperForComponent(SwitchLayout)

    const icon = wrapper.find("div.icon")
    assert.include(icon.html(), "<svg")
    wrapper.unmount()
  })

  it("Clicking the icon should emit the layout-toggled event", () => {
    const wrapper = createWrapperForComponent(SwitchLayout)
    wrapper.find("div.icon").trigger("click")
    assert.property(wrapper.emitted(), "layout-toggled")
    wrapper.unmount()
  })

  it("The component is not rendered when on IE11", () => {
    window.msCrypto = "something"
    const wrapper = createWrapperForComponent(SwitchLayout)
    assert.isFalse(wrapper.find(".switch-layout").exists())
    wrapper.unmount()
  })

  it("Clicking the toggleLayout button store the new layout in the localStorage, and should add the theme-dark class to the html", () => {
    store.state.layout = "default-layout"
    const wrapper = createWrapperForComponent(
      SwitchLayout,
      {},
      {
        path: "/",
      }
    )
    wrapper.find("a").trigger("click")

    return wrapper.vm.$nextTick().then(() => {
      assert.property(window.localStorage, "layout")
      assert.equal(window.localStorage.layout, "basic-layout")
      assert.isTrue(document.documentElement.className == "theme-dark")
      wrapper.unmount()
    })
  })
})
