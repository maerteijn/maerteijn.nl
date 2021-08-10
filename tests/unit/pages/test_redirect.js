import { assert } from "chai"

import {
  createWrapperForComponent,
  loadDefaultState,
  resetState,
  mock_axios_success,
} from "../../utils"

import RedirectPage from "@/js/pages/redirect"

import store from "@/js/store"

describe("Redirect page", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
    loadDefaultState(store.state)
  })

  afterEach(function () {
    delete window.localStorage.language
    this.stub.resetBehavior()
  })

  it("We can initialize a Redirect page", () => {
    const wrapper = createWrapperForComponent(RedirectPage)
    assert.equal(wrapper.vm.$options.name, "redirect-page")
    wrapper.unmount()
  })

  it("It redirects to the default page of the current language", () => {
    const wrapper = createWrapperForComponent(RedirectPage)
    const language = store.state.site.site_settings.default_language
    const pages = store.getters.getPagesForLanguage(language)
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
    wrapper.unmount()
  })

  it("When we update the language, it will redirect to the page of that one", () => {
    store.state.site.site_settings.default_language = "en"

    const wrapper = createWrapperForComponent(RedirectPage)
    const language = store.state.site.site_settings.default_language
    const pages = store.getters.getPagesForLanguage(language)
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
    wrapper.unmount()
  })

  it("When the localStorage.language property is set, it will have precedence", () => {
    window.localStorage.language = "en"

    const wrapper = createWrapperForComponent(RedirectPage)
    const pages = store.getters.getPagesForLanguage(
      window.localStorage.language
    )
    assert.isTrue(wrapper.vm.$router.push.calledWith(pages[0].path))
    wrapper.unmount()
  })

  it("But it won't when only one route exists", () => {
    store.state.site.pages = [{ name: "a page" }]
    const wrapper = createWrapperForComponent(RedirectPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")
    assert.include(store.state.error, "Can't find any page for language")
    wrapper.unmount()
  })

  it("And when no routes exist", () => {
    store.state.site.pages = []
    const wrapper = createWrapperForComponent(RedirectPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")
    assert.include(store.state.error, "Can't find any page for language")
    wrapper.unmount()
  })
})
