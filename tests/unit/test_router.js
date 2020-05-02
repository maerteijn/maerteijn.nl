import { assert } from "chai"

import modules from "../../dist/test"

const router = modules.router

describe("Test router", () => {
  it("The router includes 0 routes as we load all routes dynamically", () => {
    assert.equal(router.options.routes.length, 0)
  })
})
