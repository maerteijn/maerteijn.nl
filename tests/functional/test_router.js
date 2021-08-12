import { assert } from "chai"
import { mount } from "@vue/test-utils"

import {
  createWrapperForApp,
  mock_axios_success,
  loadDefaultState,
  resetState,
  waitForPromises,
} from "../utils"

import store from "@/js/store"
import { initRouter } from "@/js/router"

import App from "@/app"

describe("Test routing from one page to another", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
    loadDefaultState(store.state)
    return store.actions.loadSite("/content/site.json").then(() => {
      const router = initRouter(store.getters.getRoutes())
      this.wrapper = createWrapperForApp(App, {}, router)
    })
  })

  it("Changing the route should reload the page", function () {
    assert.isFalse(this.wrapper.find("h1#projects").exists())

    return this.wrapper.vm.$router
      .push("/nl/projects") // wait for the router itself
      .then(waitForPromises) // wait for loading the content
      .then(() => {
        assert.isTrue(this.wrapper.find("h1#projects").exists())
      })
  })

  afterEach(function () {
    this.stub.resetBehavior()
    this.wrapper.unmount()
  })
})
