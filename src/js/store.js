import Vue from "vue"
import axios from "axios"

import router from "./router"
import { resetRouter } from "./router"
import getPageComponent from "./pages/utils"

export const state = Vue.observable({
  structure: {
    pages: [],
  },
  content: {},
  loaded: false,
  lastUpdated: process.env.BUILD_TIME || "unknown",
  layout: "default-layout",
})

export const getters = {
  getPageMetaData(path) {
    const pages = state.structure.pages.filter((page) => page.path == path)
    return pages.length > 0 ? pages[0] : {}
  },
  getContent(path) {
    const content = state.content[path] || ""
    return content
  },
  getPagesForNavigation(path) {
    const metadata = this.getPageMetaData(path)
    if (metadata.settings) {
      const language = metadata.settings.language
      return state.structure.pages.filter((page) => {
        return page.settings.show_in_menu && page.settings.language == language
      })
    }
    return []
  },
}

export const actions = {
  loadStructure(url) {
    return axios.get(url).then((response) => {
      if (String(response.data) === response.data) {
        throw `Invalid JSON response when requesting ${url}`
      }
      state.structure = response.data

      // dynamic create routes here from the pages structure and add them to
      // the router
      const routes = state.structure.pages.map((page) => {
        return {
          path: page.path,
          component: getPageComponent(page.type),
        }
      })
      resetRouter(router)
      router.addRoutes(routes)
      state.loaded = true

      return response.data
    })
  },
  downloadContent(path) {
    // resolve when the requested content is already loaded
    if (path in state.content) {
      return Promise.resolve(state.content[path])
    }

    // lookup the corresponding page
    const metadata = getters.getPageMetaData(path)

    if (!metadata.path) {
      return Promise.reject(`${path} can't be found in the structure`)
    }

    // download the content and save it in the store
    return axios.get(metadata.url).then((response) => {
      Vue.set(state.content, path, response.data)
      return response.data
    })
  },
}

export default {
  state,
  getters,
  actions,
}
