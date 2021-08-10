import "./polyfills"
import { createApp } from "vue"
import App from "./app"

import router from "./js/router"
import { state } from "./js/store"

import DefaultLayout from "./js/layouts/default"
import BasicLayout from "./js/layouts/basic"

// Impoort all required css files
import "./scss/main.scss"
import "viewerjs/dist/viewer.css"

const app = createApp(App)
  // register global layouts
  .component("default-layout", DefaultLayout)
  .component("basic-layout", BasicLayout)
  // register the vue router on the app instance
  .use(router)

// register state as a global property
app.config.globalProperties.$state = state

app.mount("#app")
