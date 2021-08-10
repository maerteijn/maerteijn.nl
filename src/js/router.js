import { createRouter, createWebHistory } from "vue-router"

export const initRouter = () =>
  createRouter({
    history: createWebHistory(),
    routes: [],
  })

const router = initRouter()

export default router
