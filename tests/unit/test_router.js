import { assert } from "chai"

import modules from "../../dist/test"

const router = modules.router

describe("Test router", () => {
  it("The router includes 2 routes", () => {
    assert.equal(router.options.routes.length, 2)
  })

  it("A generic not-found page", () => {
    assert.equal(router.options.routes[0].name, "not-found")
    assert.equal(router.options.routes[0].path, "/not-found")
  })

  it("And a generic content route", () => {
    assert.equal(router.options.routes[1].name, "content")
    assert.equal(router.options.routes[1].path, "*")
  })
})
