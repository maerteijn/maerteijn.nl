import { assert } from "chai"

import { icons, getIcon } from "../../src/js/icons"

describe("Test icons", () => {
  it("The icons export contains 7 icons", () => {
    assert.lengthOf(Object.keys(icons), 7)
  })

  it("The icon keys are in the format 'fas-loader'", () => {
    Object.keys(icons).forEach((key) => {
      assert.match(key, /^[a-z\-]+$/)
    })
  })

  it("The icons all contain svg data", () => {
    Object.keys(icons).forEach((key) => {
      assert.isTrue(icons[key].startsWith("<svg"))
    })
  })

  it("The getIcon method works as expected", () => {
    Object.keys(icons).forEach((key) => {
      assert.isTrue(getIcon(key).startsWith("<svg"))
    })
  })
})
