import Vue from "vue"
import axios from "axios"

import router from "./router"
import { resetRouter } from "./router"
import { isOldBrowser } from "./utils"
import getPageComponent from "./pages/utils"

export const state = Vue.observable({
  structure: {
    pages: [],
    languages: {},
  },
  content: {},
  loaded: false,
  lastUpdated: process.env.BUILD_TIME || "unknown",
  layout: isOldBrowser() ? "basic-layout" : "default-layout",
  error: null,
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
  getPagesForLanguage(language) {
    return state.structure.pages.filter(
      (page) => page.settings && page.settings.language == language
    )
  },
  getPagesForNavigation(path) {
    const metadata = this.getPageMetaData(path)
    if (metadata.settings) {
      const pages = this.getPagesForLanguage(metadata.settings.language)
      return pages.filter((page) => page.settings.show_in_menu)
    }
    return []
  },
  getSwitchableLanguage(path) {
    const metadata = this.getPageMetaData(path)
    if (metadata.settings) {
      const language = metadata.settings.language
      return state.structure.site_settings.languages[language]
    }
    return null
  },
  getLanguages() {
    return state.structure.site_settings.languages || {}
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

// Let parcel hot reload the current structure when developing
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept(() => {
      actions.loadStructure("/content/structure.json")
    })
  }
}
