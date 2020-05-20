import { assert } from "chai"
import sinon from "sinon"

import { createWrapper } from "@vue/test-utils"

import modules from "../../dist/test"

import {
  createComponentWithoutRouter,
  resetState,
  mock_axios_success,
  mock_axios_error,
  waitForPromises,
} from "../utils"

const store = modules.store

describe("App component", () => {
  beforeEach(function () {
    this.stub = mock_axios_success()
  })
  afterEach(function () {
    this.stub.resetBehavior()
    resetState(store.state)
  })

  it("We can initialize the main App component", () => {
    const wrapper = createComponentWithoutRouter(modules.App, { path: "/" })
    assert.equal(wrapper.name(), "app")
  })

  it("The main App component renders the router view when no error exists", () => {
    const wrapper = createComponentWithoutRouter(modules.App, { path: "/" })
    assert.equal(wrapper.html(), "<router-view-stub></router-view-stub>")
  })

  it("The main App component renders an error message when it exists", () => {
    const wrapper = createComponentWithoutRouter(modules.App, { path: "/" })
    store.state.error = "Oh noo!"
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
    })
  })

  it("The main App component renders an error message when axios returns an error", function () {
    this.stub = mock_axios_error()
    const wrapper = createComponentWithoutRouter(modules.App, { path: "/" })
    return waitForPromises().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
      assert.include(wrapper.html(), "Invalid JSON response when requesting")
    })
  })

  it("The main App component listens for emitted error events and calls the handleError method", function () {
    const wrapper = createComponentWithoutRouter(modules.App, { path: "/" })
    wrapper.vm.handleError = sinon.spy(wrapper.vm.handleError)
    wrapper.vm.$root.$emit("error", "Something went wrong!")
    assert.isTrue(wrapper.vm.handleError.called)

    const root = createWrapper(wrapper.vm.$root)
    assert.property(root.emitted(), "error")
  })
})
