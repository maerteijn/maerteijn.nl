import { assert } from "vitest"

import {
  createWrapperForComponent,
  loadDefaultState,
  resetState,
} from "../../utils"

import store from "@/js/store"
import SwitchLanguage from "@/js/components/switch-language"

describe("Switch language component", () => {
  beforeEach(() => {
    loadDefaultState(store.state)
  })

  afterEach(() => {
    resetState(store.state)
    delete window.localStorage.language
  })

  it("We can initialize a SwitchLanguage component", () => {
    const wrapper = createWrapperForComponent(SwitchLanguage)
    assert.equal(wrapper.vm.$options.name, "switch-language")
    wrapper.unmount()
  })

  it("The availableLanguages computed property works as expected", () => {
    const wrapper = createWrapperForComponent(SwitchLanguage)
    assert.deepEqual(
      wrapper.vm.availableLanguages,
      Object.keys(store.state.site.site_settings.languages)
    )
    wrapper.unmount()
  })

  it("The currentLanguage computed property works as expected", () => {
    const wrapper = createWrapperForComponent(
      SwitchLanguage,
      {},
      {
        path: "/",
      }
    )
    assert.equal(
      wrapper.vm.currentLanguage,
      store.getters.getCurrentLanguage("/")
    )
    wrapper.unmount()
  })

  it("The canSwitch computed property works as expected", () => {
    const wrapper = createWrapperForComponent(SwitchLanguage)
    assert.isTrue(wrapper.vm.canSwitch)
    store.state.site.site_settings.languages = {}
    assert.isFalse(wrapper.vm.canSwitch)
    wrapper.unmount()
  })

  it("Clicking the language should store the new language in the localStorage", () => {
    assert.isUndefined(window.localStorage.language)
    const wrapper = createWrapperForComponent(
      SwitchLanguage,
      {},
      {
        path: "/",
      }
    )
    wrapper.find("a").trigger("click")

    return wrapper.vm.$nextTick().then(() => {
      assert.property(window.localStorage, "language")
      assert.equal(window.localStorage.language, "en")
      wrapper.unmount()
    })
  })
})
