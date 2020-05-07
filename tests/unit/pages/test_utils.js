import { assert } from "chai"
import Vue from "vue"

import modules from "../../../dist/test"

describe("Test pages utils", () => {
  it("The getPageComponent returns undefined when the page component is not known", () => {
    assert.isUndefined(modules.getPageComponent("unknown"))
  })

  it("The getPageComponent returns the NotFoundPage component", () => {
    const component = modules.getPageComponent("NotFoundPage")
    assert.equal(component, modules.NotFoundPage)
  })

  it("The getPageComponent returns the ContentPage component", () => {
    const component = modules.getPageComponent("ContentPage")
    assert.equal(component, modules.ContentPage)
  })
})
