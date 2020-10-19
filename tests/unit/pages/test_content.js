import Vue from "vue"

import { assert } from "chai"
import { mount, createWrapper } from "@vue/test-utils"

import {
  createComponentWithoutRouter,
  mock_axios_success,
  mock_axios_error,
  loadDefaultState,
  resetState,
  waitForPromises,
} from "../../utils"

import ContentPage from "@/js/pages/content"
import LastUpdated from "@/js/components/last-updated"
import MarkdownViewer from "@/js/components/markdown-viewer"

import * as fixtures from "../../fixtures"

import store from "@/js/store"

describe("Content page", () => {
  beforeEach(function () {
    this.wrapper = createComponentWithoutRouter(ContentPage, {
      path: "/",
    })
    resetState(store.state)
  })

  afterEach(function () {
    this.wrapper.vm.$destroy()
    resetState(store.state)
  })

  it("We can initialize a Content page", function () {
    assert.equal(this.wrapper.vm.$options.name, "content-page")
  })

  it("Default the content page will render the page div, but no content ", function () {
    assert.isTrue(this.wrapper.find(".page").exists())
    assert.isFalse(this.wrapper.find(".content").exists())
  })

  it("It renders the page div with another layout", function () {
    store.state.layout = "basic-layout"
    return this.wrapper.vm.$nextTick().then(() => {
      assert.isTrue(this.wrapper.find(".page").exists())
    })
  })

  it("The content computed property works as expected", function () {
    assert.equal(this.wrapper.vm.content, "")
    const content = "# Hello!"

    Vue.set(store.state.content, "/", content)
    return this.wrapper.vm.$nextTick().then(() => {
      assert.equal(this.wrapper.vm.content, content)
    })
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
      settings: {
        language: "nl",
      },
    }
    store.state.site.pages.push(metadata)
    assert.deepEqual(this.wrapper.vm.page_metadata, metadata)
  })

  it("The content_component computed property works as expected", function () {
    const metadata = {
      name: "home",
      title: "Home",
      path: "/",
      content_component: "MarkdownViewer",
      settings: {
        language: "nl",
      },
    }
    store.state.site.pages.push(metadata)
    assert.deepEqual(this.wrapper.vm.content_component, MarkdownViewer)
  })

  it("The footer_component computed property works as expected", function () {
    const metadata = {
      name: "home",
      title: "Home",
      path: "/",
      footer_component: "LastUpdated",
      settings: {
        language: "nl",
      },
    }
    store.state.site.pages.push(metadata)
    assert.deepEqual(this.wrapper.vm.footer_component, LastUpdated)
  })

  it("The backlink computed property works as expected", function () {
    const metadata = {
      name: "home",
      title: "Home",
      path: "/",
      settings: {
        language: "nl",
        backlink: {
          path: "/",
          title: "Hello",
        },
      },
    }
    store.state.site.pages.push(metadata)
    assert.equal(this.wrapper.vm.backlink.path, "/")
    assert.equal(this.wrapper.vm.backlink.title, "Hello")
  })
})

describe("Content page - extended", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
    this.wrapper = createComponentWithoutRouter(ContentPage, {
      path: "/",
    })
  })

  afterEach(function () {
    this.stub.resetBehavior()
    resetState(store.state)
    this.wrapper.vm.$destroy()
  })

  it("A content page renders a LastUpdated component when the footer_component is specified", function () {
    loadDefaultState(store.state)
    return waitForPromises().then(() => {
      assert.isTrue(this.wrapper.find(".last-updated").exists())
    })
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
    this.wrapper.vm.$route = {
      path: "/nl/projects",
    }

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

  it("The description of the document should be updated as well", function () {
    loadDefaultState(store.state)
    const expectedDescription = store.getters.getPageMetaData("/").description

    return waitForPromises().then(() => {
      assert.equal(
        document
          .querySelector('meta[name="description"]')
          .getAttribute("content"),
        expectedDescription
      )
    })
  })

  it("The html lang attribute should be updated as well", function () {
    loadDefaultState(store.state)
    const page_metadata = store.getters.getPageMetaData("/")

    return waitForPromises().then(() => {
      assert.equal(
        document.getElementsByTagName("html")[0].getAttribute("lang"),
        page_metadata.settings.language
      )
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

  it("When a backlink exists, it is rendered on the page", function () {
    assert.isFalse(this.wrapper.find(".backlink").exists())

    // we know this route has a backlink defined
    loadDefaultState(store.state)
    this.wrapper.vm.$route = {
      path: "/nl/projects",
    }

    return waitForPromises().then(() => {
      assert.isTrue(this.wrapper.find(".backlink").exists())
    })
  })
})
