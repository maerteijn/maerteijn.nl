import VueRouter from "vue-router"

import { mount, createLocalVue } from "@vue/test-utils"

import modules from "../dist/test"
import { state } from "../src/js/store"

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
      $state: localState || state,
    },
  })
}
