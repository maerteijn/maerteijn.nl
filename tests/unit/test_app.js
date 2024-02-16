import { assert } from "vitest"

import App from "@/app"

import {
  createWrapperForComponent,
  resetState,
  mock_fetch_success,
} from "../utils"

import store from "@/js/store"

describe("App component", () => {
  let stub

  beforeEach(() => {
    stub = mock_fetch_success()
  })
  afterEach(() => {
    stub.resetBehavior()
    resetState(store.state)
  })

  it("We can initialize the main App component", () => {
    const wrapper = createWrapperForComponent(App, {}, { path: "/" })
    assert.equal(wrapper.vm.$options.name, "app")
  })

  it("The main App component renders the router view when no error exists", () => {
    const wrapper = createWrapperForComponent(App, {}, { path: "/" })
    assert.equal(wrapper.html(), "<router-view-stub></router-view-stub>")
  })

  it("The main App component renders an error message when it exists", () => {
    const wrapper = createWrapperForComponent(App, {}, { path: "/" })
    store.state.error = "Oh noo!"
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
    })
  })
})
