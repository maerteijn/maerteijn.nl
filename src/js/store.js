import Vue from "vue"
import axios from "axios"

import router from "./router"
import { resetRouter } from "./router"
import { isOldBrowser, normalizePath } from "./utils"
import getPageComponent from "./pages/utils"
import { validator } from "./schema"

export const state = Vue.observable({
  site: {
    pages: [],
    site_settings: { default_language: "", languages: {} },
    logo_links: []
  },
  content: {},
  loaded: false,
  lastUpdated: process.env.BUILD_TIME || "unknown",
  layout: isOldBrowser() ? "basic-layout" : "default-layout",
  error: null,
})

export const getters = {
  getPageMetaData(path) {
    path = normalizePath(path)
    const pages = state.site.pages.filter((page) => page.path == path)
    return pages.length > 0 ? pages[0] : {}
  },
  getContent(path) {
    path = normalizePath(path)
    const content = state.content[path] || ""
    return content
  },
  getPagesForLanguage(language) {
    return state.site.pages.filter(
      (page) => page.settings && page.settings.language == language
    )
  },
  getPagesForNavigation(path) {
    path = normalizePath(path)
    const metadata = this.getPageMetaData(path)
    if (metadata.settings) {
      const pages = this.getPagesForLanguage(metadata.settings.language)
      return pages.filter((page) => page.settings.show_in_menu)
    }
    return []
  },
  getSwitchableLanguage(path) {
    path = normalizePath(path)
    const metadata = this.getPageMetaData(path)
    if (metadata.settings) {
      const language = metadata.settings.language
      const languages = state.site.site_settings.languages
      return language in languages ? languages[language] : null
    }
    return null
  },
  getTranslatedPages(path, language) {
    path = normalizePath(path)
    const metadata = this.getPageMetaData(path)
    if (metadata.settings && metadata.settings.identifier) {
      return state.site.pages.filter(
        (page) =>
          page.settings.identifier == metadata.settings.identifier &&
          page.settings.language == language
      )
    }
    return []
  },
  getLanguages() {
    return state.site.site_settings.languages || {}
  },
}

export const actions = {
  loadSite(url) {
    return axios.get(url).then((response) => {
      if (String(response.data) === response.data) {
        throw `Invalid JSON response when requesting ${url}`
      }

      if (!validator(response.data)) {
        const error = validator.errors[0]
        throw `Site data does not validate ${error.dataPath}: ${error.message}`
      }

      state.site = response.data

      // dynamic create routes here from the site pages and add them to
      // the router
      const routes = state.site.pages.map((page) => {
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
    path = normalizePath(path)
    // resolve when the requested content is already loaded
    if (path in state.content) {
      return Promise.resolve(state.content[path])
    }

    // lookup the corresponding page
    const metadata = getters.getPageMetaData(path)

    if (!metadata.path) {
      return Promise.reject(`${path} can't be found in the site`)
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

// Let parcel hot reload the current site when developing
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept(() => {
      actions.loadSite("/content/site.json")
    })
  }
}
