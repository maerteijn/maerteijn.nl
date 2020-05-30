import { assert } from "chai"
import { createWrapper } from "@vue/test-utils"

import modules from "../../../dist/test"

import {
  createComponentWithoutRouter,
  loadDefaultState,
  resetState,
} from "../../utils"

const store = modules.store

describe("Redirect page", () => {
  beforeEach(() => {
    loadDefaultState(store.state)
  })

  afterEach(() => {
    resetState(store.state)
    delete window.localStorage.language
  })

  it("We can initialize a Redirect page", () => {
    const wrapper = createComponentWithoutRouter(modules.RedirectPage)
    assert.equal(wrapper.name(), "redirect-page")
  })

  it("It redirects to the default page of the current language", () => {
    const wrapper = createComponentWithoutRouter(modules.RedirectPage)
    const language = store.state.site.site_settings.default_language
    const pages = store.getters.getPagesForLanguage(language)
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
  })

  it("When we update the language, it will redirect to the page of that one", () => {
    store.state.site.site_settings.default_language = "en"

    const wrapper = createComponentWithoutRouter(modules.RedirectPage)
    const language = store.state.site.site_settings.default_language
    const pages = store.getters.getPagesForLanguage(language)
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
  })

  it("When the localStorage.language property is set, it will have precedence", () => {
    window.localStorage.language = "en"

    const wrapper = createComponentWithoutRouter(modules.RedirectPage)
    const pages = store.getters.getPagesForLanguage(
      window.localStorage.language
    )
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
  })

  it("But it won't when only one route exists", () => {
    store.state.site.pages = [{ name: "a page" }]
    const wrapper = createComponentWithoutRouter(modules.RedirectPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")

    // an error object should be emitted as well
    const root = createWrapper(wrapper.vm.$root)
    assert.property(root.emitted(), "error")
  })

  it("And when no routes exist", () => {
    store.state.site.pages = []
    const wrapper = createComponentWithoutRouter(modules.RedirectPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")

    // an error object should be emitted as well
    const root = createWrapper(wrapper.vm.$root)
    assert.property(root.emitted(), "error")
  })
})
