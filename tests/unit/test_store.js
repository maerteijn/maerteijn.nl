import { assert } from "chai"

import modules from "../../dist/test"
import { mock_axios_success, mock_axios_error, resetState } from "../utils"

import * as fixtures from "../fixtures"

const store = modules.store

describe("Test store", () => {
  describe("Initial state", () => {
    it("The initial state is empty but usable", () => {
      resetState(store.state)

      // structure should have a pages propperty
      assert.isObject(store.state.structure)
      assert.property(store.state.structure, "pages")
      assert.isArray(store.state.structure.pages)
      assert.isEmpty(store.state.structure.pages)

      // structure should have a languages property
      assert.property(store.state.structure, "languages")
      assert.isObject(store.state.structure.languages)
      assert.isEmpty(store.state.structure.languages)

      // default language
      assert.property(store.state.structure, "default_language")
      assert.isEmpty(store.state.structure.default_language)

      // content
      assert.isObject(store.state.content)
      assert.isEmpty(store.state.content)

      // loaded
      assert.isBoolean(store.state.loaded)
      assert.isFalse(store.state.loaded)

      // error
      assert.property(store.state, "error")
      assert.isNull(store.state.error)
    })
  })

  describe("Getters", () => {
    beforeEach(function () {
      store.state.structure = JSON.parse(fixtures.structure_json)
    })

    afterEach(function () {
      resetState(store.state)
    })

    it("getPageMetaData returns an empty object when the requested path does not exist", function () {
      const metadata = store.getters.getPageMetaData("/i-do-not-exist")
      assert.isEmpty(metadata)
      assert.isObject(metadata)
    })

    it("getPageMetaData returns useful things with paths that do exist", function () {
      const pages = store.state.structure.pages
      const metadata = store.getters.getPageMetaData(pages[0].path)
      assert.deepEqual(metadata, pages[0])
    })

    it("getContent returns an empty string when the requested path does not exist", function () {
      const content = store.getters.getContent("/i-do-not-exist")
      assert.isEmpty(content)
      assert.isString(content)
    })

    it("getContent returns useful things with paths that do exist", function () {
      store.state.content["/my-path"] = fixtures.home_content

      const content = store.getters.getContent("/my-path")
      assert.equal(store.state.content["/my-path"], content)
    })

    it("getPagesForLanguage only returns pages for a specific language", function () {
      store.state.structure.pages[0].settings.language = "en"

      const pages = store.state.structure.pages.filter(
        (page) => (page.settings.language = "nl")
      )
      assert.deepEqual(store.getters.getPagesForLanguage("nl"), pages)
    })

    it("getPagesForNavigation only returns pages with show_in_menu = true", function () {
      const current_language = store.state.structure.pages[0].settings.language
      store.state.structure.pages[0].settings.show_in_menu = "false"

      const pages = store.state.structure.pages.filter(
        (page) =>
          page.settings.show_in_menu &&
          page.settings.language == current_language
      )
      assert.deepEqual(store.getters.getPagesForNavigation("/"), pages)
    })

    it("getSwitchableLanguage should return the language we can switch to", function () {
      assert.equal(
        store.getters.getSwitchableLanguage("/"),
        store.state.structure.site_settings.languages["nl"]
      )
      store.state.structure.pages[0].settings.language = "en"
      assert.equal(
        store.getters.getSwitchableLanguage("/"),
        store.state.structure.site_settings.languages["en"]
      )
    })
  })

  describe("Actions", () => {
    beforeEach(function () {
      this.stub = mock_axios_success()
    })

    afterEach(function () {
      this.stub.resetBehavior()
      resetState(store.state)
    })

    it("loadSite should return a Promise", function () {
      const promise = store.actions.loadSite("/content/site.json")
      assert.instanceOf(promise, Promise)
    })

    it("loadSite should fill the store with the site structure", function () {
      return store.actions.loadSite("/content/site.json").then(() => {
        assert.deepEqual(
          store.state.structure,
          JSON.parse(fixtures.structure_json)
        )
      })
      assert.isTrue(store.state.loaded)
    })

    it("loadSite should fill the vue router with routes", function () {
      const structure = JSON.parse(fixtures.structure_json)

      return store.actions.loadSite("/content/site.json").then(() => {
        // all routes from the structure should be resolvable by the router
        structure.pages.forEach((page) => {
          assert.include(
            modules.router.resolve(page.path).route.path,
            page.path
          )
        })
      })
    })

    it("loadSite throws an error when axios does not return a JSON response", function () {
      this.stub = mock_axios_error()

      return store.actions
        .loadSite("/content/site.json")
        .catch((error) => {
          assert.include(error, "Invalid JSON response")
        })
    })

    it("The downloadContent method should return a Promise and rejects it when no path is given", function () {
      const promise = store.actions.downloadContent()
      assert.instanceOf(promise, Promise)

      return promise.catch((error) => {
        assert.include(error, "undefined can't be found in the structure")
      })
    })

    it("The downloadContent method resolves immediately when the content already exists", function () {
      store.state.content["my-path"] = fixtures.home_content
      return store.actions.downloadContent("my-path").then((result) => {
        assert.equal(result, fixtures.home_content)
        // no http request with axios should have been made
        assert.isTrue(this.stub.notCalled)
      })
    })

    it("The downloadContent method downloads the requested content when it's not there yet", function () {
      const path = "/"
      const url = "/content/nl/home.md"
      store.state.structure = JSON.parse(fixtures.structure_json)

      return store.actions.downloadContent(path).then((result) => {
        // the promise should resolve with the fetched content
        assert.equal(result, fixtures.home_content)
        // and axios is called with the expected url
        assert.isTrue(this.stub.calledWith(url))
        // and the content is available in the store
        assert.include(store.state.content[path], fixtures.home_content)
      })
    })
  })
})
