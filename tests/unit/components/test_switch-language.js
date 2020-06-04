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
    delete window.localStorage.language
  })

  it("We can initialize a SwitchLanguage component", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage)
    assert.equal(wrapper.vm.$options.name, "switch-language")
  })

  it("The component renders a svg icon", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage)
    store.state.site.pages[0].settings.language = "en"

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
    assert.isTrue(wrapper.vm.canSwitch)
    store.state.site.pages[2].settings.language = "nl"
    assert.isFalse(wrapper.vm.canSwitch)
  })

  it("Clicking the icon should store the new language in the localStorage", () => {
    assert.isUndefined(window.localStorage.language)
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage, {
      path: "/",
    })
    wrapper.find("div.icon").trigger("click")

    return wrapper.vm.$nextTick().then(() => {
      assert.property(window.localStorage, "language")
      assert.equal(window.localStorage.language, "en")
    })
  })
})
