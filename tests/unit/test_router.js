import { assert } from "vitest"

import { initRouter } from "@/js/router"
import RedirectPage from "@/js/pages/redirect"

describe("Test router", () => {
  let router

  beforeEach(() => {
    router = initRouter()
  })
  it("The router includes 0 routes as we load all routes dynamically", function () {
    assert.equal(router.options.routes.length, 0)
    assert.equal(router.getRoutes().length, 0)
  })

  it("When we add a route we can resolve the new route", function () {
    router.addRoute({
      name: "my-route",
      path: "/:pathMatch(.*)*",
      component: RedirectPage,
    })

    // we now can resolve this route
    let route = router.resolve({ params: { pathMatch: "*" } })
    assert.equal(route.name, "my-route")
  })
})
