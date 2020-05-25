import "./ie11"
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./app"
import router from "./js/router"

// register global layouts
import DefaultLayout from "./js/layouts/default"
Vue.component("default-layout", DefaultLayout)

import BasicLayout from "./js/layouts/basic"
Vue.component("basic-layout", BasicLayout)

// register state as a global prototype
import { state } from "./js/store"
Vue.prototype.$state = state

// register the vue router plugin on the global vue instance
Vue.use(VueRouter)

import "./scss/main.scss"

new Vue({
  router: router,
  el: "#app",
  render: (h) => h(App),
})
