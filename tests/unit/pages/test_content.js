import Vue from "vue"

import { assert } from "chai"
import { mount, createWrapper } from "@vue/test-utils"

import modules from "../../../dist/test"

import {
  createComponentWithoutRouter,
  mock_axios_success,
  mock_axios_error,
  loadDefaultState,
  resetState,
  waitForPromises,
} from "../../utils"

import * as fixtures from "../../fixtures"

const store = modules.store

describe("Content page", () => {
  beforeEach(function () {
    this.wrapper = createComponentWithoutRouter(modules.ContentPage, {
      path: "/",
    })
  })

  afterEach(function () {
    this.wrapper.vm.$destroy()
    resetState(store.state)
  })

  it("We can initialize a Content page", function () {
    assert.equal(this.wrapper.name(), "content-page")
  })

  it("Default the content page will render some elements without choking", function () {
    assert.isTrue(this.wrapper.find(".page").exists())
    assert.isTrue(this.wrapper.find(".content").exists())
    assert.isEmpty(this.wrapper.find(".content").text())
  })

  it("It renders correctly with another layout", function () {
    store.state.layout = "basic-layout"
    return this.wrapper.vm.$nextTick().then(() => {
      assert.isTrue(this.wrapper.find(".page").exists())
      assert.isTrue(this.wrapper.find(".content").exists())
      assert.isEmpty(this.wrapper.find(".content").text())
    })
  })

  it("The lastUpdated computed property works as expected", function () {
    assert.equal(this.wrapper.vm.lastUpdated, "unknown")

    store.state.lastUpdated = "today"
    assert.equal(this.wrapper.vm.lastUpdated, "today")
  })

  it("The renderedMarkdown computed property works as expected", function () {
    Vue.set(store.state.content, "/", "# Hello!")
    assert.equal(this.wrapper.vm.renderedMarkdown, '<h1 id="hello">Hello!</h1>')
  })

  it("The loaded computed property works as expected", function () {
    assert.isFalse(this.wrapper.vm.loaded)

    // set the content here so the loadContent method will return gracefully
    Vue.set(store.state.content, "/", "Hello!")
    store.state.loaded = true
    assert.isTrue(this.wrapper.vm.loaded)
  })

  it("The page_metadata computed property works as expected", function () {
    const metadata = {
      name: "home",
      title: "Home",
      path: "/",
    }
    store.state.site.pages.push(metadata)
    assert.deepEqual(this.wrapper.vm.page_metadata, metadata)
  })
})

describe("Content page - extended", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
    this.wrapper = createComponentWithoutRouter(modules.ContentPage, {
      path: "/",
    })
  })

  afterEach(function () {
    this.stub.resetBehavior()
    resetState(store.state)
    this.wrapper.vm.$destroy()
  })

  it("A content page is responsive to state changes", function () {
    assert.isFalse(this.wrapper.find("h1#home").exists())

    // now the state is changed and the content can be fetched
    loadDefaultState(store.state)

    // we will wait for all promises to be resolved first
    return waitForPromises().then(() => {
      assert.isTrue(this.wrapper.find("h1#home").exists())
    })
  })

  it("Changing the route should reload the page", function () {
    assert.isFalse(this.wrapper.find("h1#projects").exists())

    // so let's go to the projects page
    loadDefaultState(store.state)
    this.wrapper.vm.$route = { path: "/nl/projects" }

    return waitForPromises().then(() => {
      assert.isTrue(this.wrapper.find("h1#projects").exists())
    })
  })

  it("The title of the document should be updated as well", function () {
    loadDefaultState(store.state)
    const expectedTitle = store.getters.getPageMetaData("/").title

    return waitForPromises().then(() => {
      assert.equal(document.title, expectedTitle)
    })
  })

  it("When an error occurs, an error message is emitted", function () {
    this.stub = mock_axios_error()

    // so let's go to the projects page
    loadDefaultState(store.state)
    this.wrapper.vm.$route = { path: "/nl/projects" }

    return waitForPromises().then(() => {
      const root = createWrapper(this.wrapper.vm.$root)
      assert.property(root.emitted(), "error")
    })
  })
})
