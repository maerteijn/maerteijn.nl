import { assert } from "chai"

import { initRouter } from "@/js/router"
import RedirectPage from "@/js/pages/redirect"

describe("Test router", () => {
  beforeEach(function () {
    this.router = initRouter()
  })
  it("The router includes 0 routes as we load all routes dynamically", function () {
    assert.equal(this.router.options.routes.length, 0)
    assert.equal(this.router.getRoutes().length, 0)
    debugger
  })

  it("When we add a route we can resolve the new route", function () {
    this.router.addRoute({
      name: "my-route",
      path: "/:pathMatch(.*)*",
      component: RedirectPage,
    })

    // we now can resolve this route
    let route = this.router.resolve({ params: { pathMatch: "*" } })
    assert.equal(route.name, "my-route")
  })
})
