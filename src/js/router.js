import { createRouter, createWebHistory } from "vue-router"

export const initRouter = (routes = []) =>
  createRouter({
    history: createWebHistory(),
    routes: routes,
  })
