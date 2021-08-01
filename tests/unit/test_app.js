import { assert } from "chai"
import sinon from "sinon"

import { mount } from "@vue/test-utils"
import App from "@/app"

import {
  createComponentWithoutRouter,
  resetState,
  mock_axios_success,
  mock_axios_error,
  waitForPromises,
} from "../utils"

import store from "@/js/store"

describe("App component", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
  })
  afterEach(function () {
    this.stub.resetBehavior()
    resetState(store.state)
  })

  it("We can initialize the main App component", () => {
    const wrapper = createComponentWithoutRouter(App, { path: "/" })
    assert.equal(wrapper.vm.$options.name, "app")
  })

  it("The main App component renders the router view when no error exists", () => {
    const wrapper = createComponentWithoutRouter(App, { path: "/" })
    assert.equal(wrapper.html(), "<router-view-stub></router-view-stub>")
  })

  it("The main App component renders an error message when it exists", () => {
    const wrapper = createComponentWithoutRouter(App, { path: "/" })
    store.state.error = "Oh noo!"
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
    })
  })

  it("The main App component renders an error message when axios returns an error", function () {
    this.stub = mock_axios_error()
    const wrapper = createComponentWithoutRouter(App, { path: "/" })
    return waitForPromises().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
      assert.include(wrapper.html(), "Invalid JSON response when requesting")
    })
  })
})
