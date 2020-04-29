import { assert } from "chai"

import modules from "../../dist/test"

const router = modules.router

describe("Test router", () => {
  it("The router includes 4 routes", () => {
    assert.equal(router.options.routes.length, 4)
  })

  it("The home route exists", () => {
    assert.equal(router.options.routes[0].name, "home")
    assert.equal(router.options.routes[0].path, "/")
  })

  it("The projects route exists", () => {
    assert.equal(router.options.routes[1].name, "projects")
    assert.equal(router.options.routes[1].path, "/projects")
  })

  it("The colophon route exists", () => {
    assert.equal(router.options.routes[2].name, "colophon")
    assert.equal(router.options.routes[2].path, "/colophon")
  })

  it("The 404 route exists", () => {
    assert.equal(router.options.routes[3].name, "404")
    assert.equal(router.options.routes[3].path, "*")
  })
})
