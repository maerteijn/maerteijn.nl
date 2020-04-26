import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/home"
import About from "./pages/about"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
})

export default router
