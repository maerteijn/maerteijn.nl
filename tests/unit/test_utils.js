import { assert } from "chai"

import { isOldBrowser } from "../../src/js/utils"

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
})
