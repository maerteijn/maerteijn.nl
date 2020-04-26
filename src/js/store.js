import Vue from "vue"
import axios from "axios"

export const state = Vue.observable({
  content: {},
})

export const actions = {
  loadContent() {
    return axios.get("/data.json").then((response) => {
      state.content = response.data
    })
  },
}
