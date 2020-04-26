import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/home"
import About from "./pages/about"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "about", path: "/about", component: About },
  ],
})

export default router
