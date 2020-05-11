import axios from "axios"
import VueRouter from "vue-router"
import sinon from "sinon"

import { mount, createLocalVue } from "@vue/test-utils"

import modules from "../dist/test"

import * as fixtures from "./fixtures"

export const createVueInstance = () => {
  const localVue = createLocalVue()
  // Let the local vue instance use Vuerouter
  localVue.use(VueRouter)

  // And let the local vue instance have the global component available
  localVue.component("default-layout", modules.DefaultLayout)

  return localVue
}

export const createComponent = (
  component,
  propsData = {},
  localState = null
) => {
  return mount(component, {
    localVue: createVueInstance(),
    router: modules.router,
    propsData: propsData,
    mocks: {
      $state: localState || modules.store.state,
    },
  })
}

export const mock_axios_success = () => {
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

export const mock_axios_error = () => {
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

export const resetState = (state) => {
  state.structure = { pages: [] }
  state.content = {}
  state.loaded = false
}
