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
import router from "@/js/router"

import App from "@/app"

describe("Test routing from one page to another", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
    loadDefaultState(store.state)
    this.wrapper = createWrapperForApp(App)
    return waitForPromises()
  })

  it("Changing the route should reload the page", function () {
    assert.isFalse(this.wrapper.find("h1#projects").exists())

    return router
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
