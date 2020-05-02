// Transpile all vue components and build with parcel as commonjs,
// there is no transpiler available (yet) for .vue components in mocha directly.
import Navigation from "../src/js/components/navigation.vue"

import DefaultLayout from "../src/js/layouts/default"

import NotFoundPage from "../src/js/pages/notfound"
import ContentPage from "../src/js/pages/content"

import router from "../src/js/router"

import store from "../src/js/store"

export default {
  Navigation,
  DefaultLayout,
  NotFoundPage,
  ContentPage,
  router,
  store,
}
