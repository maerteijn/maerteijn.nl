import Vue from "vue"
import App from "./app"
import router from "./js/router"

// register global components
import Default from "./js/layouts/default"
Vue.component("default-layout", Default)

import "./scss/main.scss"

new Vue({
  router: router,
  el: "#app",
  render: (h) => h(App),
})
