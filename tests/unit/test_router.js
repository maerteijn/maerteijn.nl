import { assert } from "chai"

import router, { resetRouter } from "@/js/router"
import RedirectPage from "@/js/pages/redirect"

describe("Test router", () => {
  beforeEach(() => {
    resetRouter(router)
  })
  it("The router includes 0 routes as we load all routes dynamically", () => {
    assert.equal(router.options.routes.length, 0)
    assert.isNull(router.resolve("*").route.name)
  })

  it("The resetRouter resets a router", () => {
    router.addRoutes([
      {
        name: "my-route",
        path: "*",
        component: RedirectPage,
      },
    ])

    // we now can resolve this route
    assert.equal(router.resolve("*").route.name, "my-route")

    // let's reset the router
    resetRouter(router)
    assert.isNull(router.resolve("*").route.name)
  })
})
