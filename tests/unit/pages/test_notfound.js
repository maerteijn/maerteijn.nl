import { assert } from "chai"
import { createWrapper } from "@vue/test-utils"

import modules from "../../../dist/test"

import {
  createComponentWithoutRouter,
  loadDefaultState,
  resetState,
} from "../../utils"

const store = modules.store

describe("Not found page", () => {
  beforeEach(() => {
    loadDefaultState(store.state)
  })

  afterEach(() => {
    resetState(store.state)
    delete window.localStorage.language
  })

  it("We can initialize a Not Found page", () => {
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    assert.equal(wrapper.name(), "not-found-page")
  })

  it("It redirects to the default page of the current language", () => {
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    const language = store.state.structure.site_settings.default_language
    const pages = store.getters.getPagesForLanguage(language)
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
  })

  it("When we update the language, it will redirect to the page of that one", () => {
    store.state.structure.site_settings.default_language = "en"

    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    const language = store.state.structure.site_settings.default_language
    const pages = store.getters.getPagesForLanguage(language)
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
  })

  it("When the localStorage.language property is set, it will have precedence", () => {
    window.localStorage.language = "en"

    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    const pages = store.getters.getPagesForLanguage(
      window.localStorage.language
    )
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
  })

  it("But it won't when only one route exists", () => {
    store.state.structure.pages = [{ name: "a page" }]
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")

    // an error object should be emitted as well
    const root = createWrapper(wrapper.vm.$root)
    assert.property(root.emitted(), "error")
  })

  it("And when no routes exist", () => {
    store.state.structure.pages = []
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")

    // an error object should be emitted as well
    const root = createWrapper(wrapper.vm.$root)
    assert.property(root.emitted(), "error")
  })
})
