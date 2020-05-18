import { assert } from "chai"

import modules from "../../../dist/test"

import {
  createComponentWithoutRouter,
  loadDefaultState,
  resetState,
} from "../../utils"

const store = modules.store

describe("Switch language component", () => {
  beforeEach(() => {
    loadDefaultState(store.state)
  })

  afterEach(() => {
    resetState(store.state)
  })

  it("We can initialize a SwitchLanguage component", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage)

    assert.equal(wrapper.name(), "switch-language")
  })

  it("The component renders a svg icon", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage)
    store.state.structure.pages[0].settings.language = "en"

    const icon = wrapper.find("div.icon")
    assert.include(icon.html(), "<svg")
  })

  it("The switchTo language is as defined in the site settings", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage, {
      path: "/",
    })
    const currentLanguage = store.getters.getPageMetaData("/").settings.language
    const expected = store.getters.getLanguages()[currentLanguage]
    assert.equal(wrapper.vm.switchTo, expected)
  })

  it("The canSwitch property only return true when pages in the other language exist", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage, {
      path: "/",
    })
    assert.isFalse(wrapper.vm.canSwitch)
    store.state.structure.pages[0].settings.language = "en"
    assert.isTrue(wrapper.vm.canSwitch)
  })

  it("Clicking the icon should emit the language-switched event", () => {
    store.state.structure.pages[0].settings.language = "en"
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage, {
      path: "/",
    })

    return wrapper.vm.$nextTick().then(() => {
      wrapper.find("div.icon").trigger("click")
      // and the route should be changed too
      assert.isTrue(wrapper.vm.$router.push.called)
    })
  })
})
