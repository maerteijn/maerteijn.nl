import { assert } from "chai"

import modules from "../../dist/test"

const router = modules.router

describe("Test router", () => {
  beforeEach(() => {
    modules.resetRouter(router)
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
        component: modules.NotFoundPage,
      },
    ])

    // we now can resolve this route
    assert.equal(router.resolve("*").route.name, "my-route")

    // let's reset the router
    modules.resetRouter(router)
    assert.isNull(router.resolve("*").route.name)
  })
})
