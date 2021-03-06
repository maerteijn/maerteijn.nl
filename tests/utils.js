import axios from "axios"
import VueRouter from "vue-router"
import sinon from "sinon"

import { mount, createLocalVue } from "@vue/test-utils"

import DefaultLayout from "@/js/layouts/default"
import BasicLayout from "@/js/layouts/basic"
import store from "@/js/store"
import router from "@/js/router"

import * as fixtures from "./fixtures"

export function createVueInstance(withRouter = true) {
  const localVue = createLocalVue()

  if (withRouter) {
    // Let the local vue instance use Vuerouter
    localVue.use(VueRouter)
  }

  // And let the local vue instance have the global layout components available
  localVue.component("default-layout", DefaultLayout)
  localVue.component("basic-layout", BasicLayout)

  return localVue
}

export function createComponent(component, propsData = {}) {
  return mount(component, {
    localVue: createVueInstance(),
    router: router,
    propsData: propsData,
    mocks: {
      $state: store.state,
    },
  })
}

export function createComponentWithoutRouter(component, current_route = {}) {
  return mount(component, {
    localVue: createVueInstance(false),
    mocks: {
      $state: store.state,
      $route: current_route,
      $router: sinon.createStubInstance(VueRouter),
    },
    stubs: ["router-link", "router-view"],
  })
}

export function mock_axios_success() {
  const stub = sinon.stub()

  // return the parsed site json
  stub.withArgs("/content/site.json").returns(
    Promise.resolve({
      data: JSON.parse(fixtures.site_json),
    })
  )

  // add stubs for the content calls
  stub.withArgs("/content/nl/home.md").resolves({ data: fixtures.home_content })
  stub
    .withArgs("/content/nl/projects.md")
    .resolves({ data: fixtures.projects_content })

  // patch the axios.get call
  axios.get = stub

  return stub
}

export function mock_axios_error() {
  const stub = sinon.stub()
  // returning a string means that axios could not parse the JSON
  stub.withArgs("/content/site.json").resolves({
    data: "a string",
  })
  stub.withArgs("/content/nl/projects.md").rejects("Something went wrong")

  axios.get = stub
  return stub
}

export function loadDefaultState(state) {
  state.site = JSON.parse(fixtures.site_json)
  state.loaded = true
}

export function resetState(state) {
  state.site = {
    site_settings: { default_language: "", languages: {} },
    pages: [],
    logo_links: {},
  }
  state.content = {}
  state.loaded = false
  state.layout = "default-layout"
  state.error = null
}

export function waitForPromises() {
  // A trick to wait for all promises to be resolved due to the scheduler nature
  // of javascript. See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
  // and https://github.com/testing-library/react-testing-library/issues/11
  return new Promise((resolve) => setImmediate(resolve))
}
