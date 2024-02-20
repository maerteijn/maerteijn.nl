import { assert } from "vitest"

import {
  createWrapperForComponent,
  mock_fetch_success,
  loadDefaultState,
  resetState,
  waitForPromises,
} from "../../utils"

import ContentPage from "@/js/pages/content"
import LastUpdated from "@/js/components/last-updated"
import MarkdownViewer from "@/js/components/markdown-viewer"

import store from "@/js/store"

describe("Content page", () => {
  let wrapper

  beforeEach(function () {
    wrapper = createWrapperForComponent(
      ContentPage,
      {},
      {
        path: "/",
      }
    )
    resetState(store.state)
  })

  afterEach(function () {
    wrapper.unmount()
    resetState(store.state)
  })

  it("We can initialize a Content page", function () {
    assert.equal(wrapper.vm.$options.name, "content-page")
  })

  it("Default the content page will render the page div, but no content ", function () {
    assert.isTrue(wrapper.find(".page").exists())
    assert.isFalse(wrapper.find(".content").exists())
  })

  it("It renders the page div with another layout", function () {
    store.state.layout = "basic-layout"
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".page").exists())
    })
  })

  it("The content computed property works as expected", function () {
    assert.equal(wrapper.vm.content, "")
    const content = "# Hello!"

    store.state.content["/"] = content
    return wrapper.vm.$nextTick().then(() => {
      assert.equal(wrapper.vm.content, content)
    })
  })

  it("The loaded computed property works as expected", function () {
    assert.isFalse(wrapper.vm.loaded)

    // set the content here so the loadContent method will return gracefully
    store.state.content["/"] = "Hello!"
    store.state.loaded = true
    assert.isTrue(wrapper.vm.loaded)
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
    assert.deepEqual(wrapper.vm.page_metadata, metadata)
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
    assert.deepEqual(wrapper.vm.content_component, MarkdownViewer)
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
    assert.deepEqual(wrapper.vm.footer_component, LastUpdated)
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
    assert.equal(wrapper.vm.backlink.path, "/")
    assert.equal(wrapper.vm.backlink.title, "Hello")
  })
})

describe("Content page - extended", () => {
  let stub
  let wrapper

  beforeEach(() => {
    stub = mock_fetch_success()
    wrapper = createWrapperForComponent(
      ContentPage,
      {},
      {
        path: "/",
      }
    )
  })

  afterEach(() => {
    stub.resetBehavior()
    resetState(store.state)
    wrapper.unmount()
  })

  it("A content page renders a LastUpdated component when the footer_component is specified", function () {
    loadDefaultState(store.state)
    return waitForPromises().then(() => {
      assert.isTrue(wrapper.find(".last-updated").exists())
    })
  })

  it("A content page is responsive to state changes", function () {
    assert.isFalse(wrapper.find("h1#home").exists())

    // now the state is changed and the content can be fetched
    loadDefaultState(store.state)

    // we will wait for all promises to be resolved first
    return waitForPromises().then(() => {
      assert.isTrue(wrapper.find("h1#home").exists())
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

  it("When a backlink exists, it is rendered on the page", function () {
    assert.isFalse(wrapper.find(".backlink").exists())

    // we know this route has a backlink defined
    loadDefaultState(store.state)
    wrapper.vm.$route = {
      path: "/nl/projects",
    }

    return waitForPromises().then(() => {
      assert.isTrue(wrapper.find(".backlink").exists())
    })
  })
})
