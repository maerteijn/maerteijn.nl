import "./polyfills"
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

// Impoort all required css files
import "./scss/main.scss"
import "viewerjs/dist/viewer.css"

new Vue({
  router: router,
  el: "#app",
  render: (h) => h(App),
})
