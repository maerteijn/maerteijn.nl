import VueRouter from "vue-router"

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: [],
  })

export const resetRouter = (router) => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
  router.options.routes = []
}

const router = createRouter()

export default router
