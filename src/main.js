import Vue from "vue"
import App from "./app"
import router from "./js/router"

// register global components
import Default from "./js/layouts/default"
Vue.component("default-layout", Default)

// register state as a global prototype
import { state } from "./js/store"
Vue.prototype.$state = state

import "./scss/main.scss"

new Vue({
  router: router,
  el: "#app",
  render: (h) => h(App),
})
