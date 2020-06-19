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

  it("The availableLanguages computed property works as expected", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage)
    assert.deepEqual(
      wrapper.vm.availableLanguages,
      Object.keys(store.state.site.site_settings.languages)
    )
  })

  it("The currentLanguage computed property works as expected", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage, {
      path: "/",
    })
    assert.equal(
      wrapper.vm.currentLanguage,
      store.getters.getCurrentLanguage("/")
    )
  })

  it("The canSwitch computed property works as expected", () => {
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage)
    assert.isTrue(wrapper.vm.canSwitch)
    store.state.site.site_settings.languages = {}
    assert.isFalse(wrapper.vm.canSwitch)
  })

  it("Clicking the language should store the new language in the localStorage", () => {
    assert.isUndefined(window.localStorage.language)
    const wrapper = createComponentWithoutRouter(modules.SwitchLanguage, {
      path: "/",
    })
    wrapper.find("a").trigger("click")

    return wrapper.vm.$nextTick().then(() => {
      assert.property(window.localStorage, "language")
      assert.equal(window.localStorage.language, "en")
    })
  })
})
