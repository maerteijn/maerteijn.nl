import "./polyfills"
import { createApp } from "vue"
import App from "./app"

import { initRouter } from "./js/router"
import { state, actions, getters } from "./js/store"

import DefaultLayout from "./js/layouts/default"
import BasicLayout from "./js/layouts/basic"

// Impoort all required css files
import "./scss/main.scss"
import "viewerjs/dist/viewer.css"

actions
  .loadSite("/content/site.json")
  .then(() => actions.resetError())
  .catch((e) => actions.handleError(e))
  .then(() => {
    // add the routes loaded from the site.json
    const router = initRouter(getters.getRoutes())

    const app = createApp(App)
      // register global layouts
      .component("default-layout", DefaultLayout)
      .component("basic-layout", BasicLayout)
      // register the vue router on the app instance
      .use(router)

    // register state as a global property
    app.config.globalProperties.$state = state

    router.isReady().then(() => app.mount("#app"))
  })
