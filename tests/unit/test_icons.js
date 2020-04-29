import { assert } from "chai"

import icons from "../../src/js/icons"

describe("Test icons", () => {
  it("The icons export contains 4 icons", () => {
    assert.lengthOf(Object.keys(icons), 4)
  })

  it("The icon keys are in the format 'fas-loader'", () => {
    Object.keys(icons).forEach((key) => {
      assert.match(key, /^[a-z]+\-*[a-z]*\-*[a-z]*$/)
    })
  })

  it("The icons all contain svg data", () => {
    Object.keys(icons).forEach((key) => {
      assert.isTrue(icons[key].startsWith("<svg"))
    })
  })
})
