import Vue from "vue"
import axios from "axios"

export const state = Vue.observable({
  content: {},
})

export const actions = {
  loadContent() {
    return axios.get("./content.json").then((response) => {
      state.content = response.data
    })
  },
}
