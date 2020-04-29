import Vue from "vue"
import axios from "axios"

export const state = Vue.observable({
  structure: {
    pages: [],
  },
  content: {},
  loaded: false,
})

export const getters = {
  getPageMetaData(path) {
    const pages = state.structure.pages.filter((page) => page.path == path)
    return pages.length > 0 ? pages[0] : null
  },
  getContent(path) {
    const content = state.content[path] || ""
    return content
  },
}

export const actions = {
  loadStructure() {
    return axios.get("./content/structure.json").then((response) => {
      if (String(response.data) === response.data) {
        console.error("Invalid json response")
      }
      state.structure = response.data
      state.loaded = true
    })
  },
  downloadContent(path) {
    // first check if we have not already loaded it
    if (path in state.content) {
      return Promise.resolve(state.content[path])
    }

    // check if there is such a path defined in the content and get the
    // markdown download link
    const downloadLink = getters.getPageMetaData(path).url
    if (!downloadLink) {
      return Promise.reject(`${path} can't be found in the content`)
    }

    return axios.get(downloadLink).then((response) => {
      Vue.set(state.content, path, response.data)
    })
  },
}
