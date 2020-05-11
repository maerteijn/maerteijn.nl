// Transpile all vue components and build with parcel as commonjs,
// there is no transpiler available (yet) for .vue components in mocha directly.
import Navigation from "../src/js/components/navigation.vue"

import DefaultLayout from "../src/js/layouts/default"

import getPageComponent from "../src/js/pages/utils"
import NotFoundPage from "../src/js/pages/notfound"
import ContentPage from "../src/js/pages/content"

import LastUpdated from "../src/js/components/last-updated"
import Logo from "../src/js/components/logo"

import router from "../src/js/router"
import { resetRouter } from "../src/js/router"

import store from "../src/js/store"

export default {
  Navigation,
  DefaultLayout,
  getPageComponent,
  NotFoundPage,
  ContentPage,
  Logo,
  LastUpdated,
  router,
  resetRouter,
  store,
}
