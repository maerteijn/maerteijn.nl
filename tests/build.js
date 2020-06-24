// Transpile all vue components and build with parcel as commonjs,
// there is no transpiler available (yet) for .vue components in mocha directly.
import App from "../src/app"

import DefaultLayout from "../src/js/layouts/default"
import BasicLayout from "../src/js/layouts/basic"

import getPageComponent from "../src/js/pages/utils"
import RedirectPage from "../src/js/pages/redirect"
import ContentPage from "../src/js/pages/content"
import ErrorPage from "../src/js/pages/error"

import getContentComponent from "../src/js/components/utils"
import Navigation from "../src/js/components/navigation.vue"
import LastUpdated from "../src/js/components/last-updated"
import Logo from "../src/js/components/logo"
import SwitchLayout from "../src/js/components/switch-layout"
import SwitchLanguage from "../src/js/components/switch-language"
import Loading from "../src/js/components/loading"
import MarkdownViewer from "../src/js/components/markdown-viewer"
import BackLink from "../src/js/components/backlink"

import router from "../src/js/router"
import { resetRouter } from "../src/js/router"

import store from "../src/js/store"
import { state, getters, actions } from "../src/js/store"

export default {
  App,
  DefaultLayout,
  BasicLayout,
  getPageComponent,
  RedirectPage,
  ContentPage,
  ErrorPage,
  getContentComponent,
  Navigation,
  Logo,
  LastUpdated,
  SwitchLayout,
  SwitchLanguage,
  Loading,
  MarkdownViewer,
  BackLink,
  router,
  resetRouter,
  store,
}
