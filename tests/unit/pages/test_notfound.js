import { assert } from "chai"

import modules from "../../../dist/test"

import {
  createComponentWithoutRouter,
  loadDefaultState,
  resetState,
} from "../../utils"

const store = modules.store

describe("Not found page", () => {
  beforeEach(() => {
    loadDefaultState(store.state)
  })

  afterEach(() => {
    resetState(store.state)
  })

  it("We can initialize a Not Found page", () => {
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    assert.equal(wrapper.name(), "not-found-page")
  })

  it("It redirects to the default page", () => {
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    const default_path = store.state.structure.pages[0].path
    assert.isTrue(wrapper.vm.$router.push.calledWith(default_path))
  })

  it("But it won't when only one route exists", () => {
    store.state.structure.pages = [{ name: "a page" }]
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")
  })

  it("And when no routes exist", () => {
    store.state.structure.pages = []
    const wrapper = createComponentWithoutRouter(modules.NotFoundPage)
    assert.isFalse(wrapper.vm.$router.push.called)
    assert.include(wrapper.text(), "404")
  })
})
