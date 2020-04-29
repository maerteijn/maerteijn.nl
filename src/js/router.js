import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from "./pages/home"
import ProjectsPage from "./pages/projects"
import ColophonPage from "./pages/colophon"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: "home", path: "/", component: HomePage },
    { name: "projects", path: "/projects", component: ProjectsPage },
    { name: "colophon", path: "/colophon", component: ColophonPage },
  ],
})

export default router
