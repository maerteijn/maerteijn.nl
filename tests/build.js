// Transpile all vue components and build with parcel as commonjs,
// there is no transpiler available (yet) for .vue components in mocha directly.
import Navigation from "../src/js/components/navigation.vue"

import DefaultLayout from "../src/js/layouts/default"
import BasicLayout from "../src/js/layouts/basic"

import getPageComponent from "../src/js/pages/utils"
import NotFoundPage from "../src/js/pages/notfound"
import ContentPage from "../src/js/pages/content"

import LastUpdated from "../src/js/components/last-updated"
import Logo from "../src/js/components/logo"
import SwitchLayout from "../src/js/components/switch-layout"
import SwitchLanguage from "../src/js/components/switch-language"

import router from "../src/js/router"
import { resetRouter } from "../src/js/router"

import store from "../src/js/store"

export default {
  DefaultLayout,
  BasicLayout,
  getPageComponent,
  NotFoundPage,
  ContentPage,
  Navigation,
  Logo,
  LastUpdated,
  SwitchLayout,
  SwitchLanguage,
  router,
  resetRouter,
  store,
}
