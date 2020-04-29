// Transpile all vue components and build with parcel as commonjs,
// there is no transpiler available (yet) for .vue components in mocha directly.
import Navigation from "../src/js/components/navigation.vue"

import DefaultLayout from "../src/js/layouts/default"

import HomePage from "../src/js/pages/home"
import ProjectsPage from "../src/js/pages/projects"
import ColophonPage from "../src/js/pages/colophon"
import NotFoundPage from "../src/js/pages/notfound"

import router from "../src/js/router"

export default {
  Navigation,
  DefaultLayout,
  HomePage,
  ProjectsPage,
  NotFoundPage,
  router,
}
