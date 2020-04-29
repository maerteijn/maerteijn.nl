import Vue from "vue"
import VueRouter from "vue-router"

import ContentPage from "./pages/content"
import NotFoundPage from "./pages/notfound"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: "not-found", path: "/not-found", component: NotFoundPage },
    { name: "content", path: "*", component: ContentPage },
  ],
})

export default router
