import { assert } from "chai"

import { isOldBrowser, normalizePath } from "../../src/js/utils"

describe("Test utils", () => {
  afterEach(() => {
    window.msCrypto = undefined
  })

  it("Test isOldBrowser - IE 11", () => {
    assert.isFalse(isOldBrowser())
    // window.msCrypto is only defined on IE 11
    window.msCrypto = "something"
    assert.isTrue(isOldBrowser())
  })

  it("Test normalizePath", () => {
    assert.equal("/my-path", normalizePath("/my-path/"))
    assert.equal("/my-path", normalizePath("/my-path"))
    assert.equal(
      "/my-path/another-path",
      normalizePath("/my-path/another-path/")
    )
    assert.equal("/", normalizePath("/"))
  })
})
