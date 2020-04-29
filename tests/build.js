// Transpile all vue components and build with parcel as commonjs,
// there is no transpiler available (yet) for .vue components in mocha directly.
import Navigation from "../src/js/components/navigation.vue"

import DefaultLayout from "../src/js/layouts/default"

import HomePage from "../src/js/pages/home"

import router from "../src/js/router"

export default {
  Navigation,
  DefaultLayout,
  HomePage,
  router,
}
