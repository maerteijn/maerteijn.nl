import axios from "axios"
import VueRouter from "vue-router"
import sinon from "sinon"

import { mount, createLocalVue } from "@vue/test-utils"

import modules from "../dist/test"

import * as fixtures from "./fixtures"

export function createVueInstance(withRouter = true) {
  const localVue = createLocalVue()

  if (withRouter) {
    // Let the local vue instance use Vuerouter
    localVue.use(VueRouter)
  }

  // And let the local vue instance have the global component available
  localVue.component("default-layout", modules.DefaultLayout)

  return localVue
}

export function createComponent(component, propsData = {}) {
  return mount(component, {
    localVue: createVueInstance(),
    router: modules.router,
    propsData: propsData,
    mocks: {
      $state: modules.store.state,
    },
  })
}

export function createComponentWithoutRouter(component, current_route = {}) {
  return mount(component, {
    localVue: createVueInstance(false),
    mocks: {
      $state: modules.store.state,
      $route: current_route,
    },
    stubs: ["router-link", "router-view"],
  })
}

export function mock_axios_success() {
  const stub = sinon.stub()

  // return the parsed structure json
  stub.withArgs("./content/structure.json").returns(
    Promise.resolve({
      data: JSON.parse(fixtures.structure_json),
    })
  )

  // add stubs for the content calls
  stub
    .withArgs("./content/home.md")
    .returns(Promise.resolve({ data: fixtures.home_content }))
  stub
    .withArgs("./content/projects.md")
    .returns(Promise.resolve({ data: fixtures.projects_content }))

  // patch the axios.get call
  axios.get = stub

  return stub
}

export function mock_axios_error() {
  const stub = sinon.stub()
  // returning a string means that axios could not parse the JSON
  stub.withArgs("./content/structure.json").returns(
    Promise.resolve({
      data: "a string",
    })
  )
  axios.get = stub
  return stub
}

export function loadDefaultState(state) {
  state.structure = JSON.parse(fixtures.structure_json)
  state.loaded = true
}

export function resetState(state) {
  state.structure = { pages: [] }
  state.content = {}
  state.loaded = false
}

export function waitForPromises() {
  // A trick to wait for all promises to be resolved due to the scheduler nature
  // of javascript. See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
  // and https://github.com/testing-library/react-testing-library/issues/11
  return new Promise((resolve) => setImmediate(resolve))
}
