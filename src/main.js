import Vue from 'vue'
import App from "./app"
import router from "./js/router"

import './scss/main.scss'

new Vue({
  router: router,
  el: '#app',
  render: h => h(App),
})
