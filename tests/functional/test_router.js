import { assert } from "chai"

import {
  createWrapperForApp,
  mock_fetch_success,
  loadDefaultState,
  waitForPromises,
} from "../utils"

import store from "@/js/store"
import { initRouter } from "@/js/router"

import App from "@/app"

describe("Test routing from one page to another", () => {
  let stub
  let wrapper

  beforeEach(function () {
    stub = mock_fetch_success()
    loadDefaultState(store.state)
    return store.actions.loadSite("/content/site.json").then(() => {
      const router = initRouter(store.getters.getRoutes())
      wrapper = createWrapperForApp(App, {}, router)
    })
  })

  it("Changing the route should reload the page", function () {
    assert.isFalse(wrapper.find("h1#projects").exists())

    return wrapper.vm.$router
      .push("/nl/projects") // wait for the router itself
      .then(waitForPromises) // wait for loading the content
      .then(() => {
        assert.isTrue(wrapper.find("h1#projects").exists())
      })
  })

  afterEach(function () {
    stub.resetBehavior()
    wrapper.unmount()
  })
})
