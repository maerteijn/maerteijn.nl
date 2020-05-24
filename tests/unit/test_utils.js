import { assert } from "chai"

import { isIE11 } from "../../src/js/utils"

describe("Test utils", () => {
  afterEach(() => {
    window.msCrypto = undefined
  })

  it("Test isIE11", () => {
    assert.isFalse(isIE11())
    // window.msCrypto is only defined on IE 11
    window.msCrypto = "something"
    assert.isTrue(isIE11())
  })
})
