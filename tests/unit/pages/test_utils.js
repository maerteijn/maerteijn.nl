import { assert } from "chai"
import Vue from "vue"

import getPageComponent from "@/js/pages/utils"
import ContentPage from "@/js/pages/content"
import RedirectPage from "@/js/pages/redirect"

describe("Test pages utils", () => {
  it("The getPageComponent returns undefined when the page component is not known", () => {
    assert.isUndefined(getPageComponent("unknown"))
  })

  it("The getPageComponent returns the RedirectPage component", () => {
    const component = getPageComponent("RedirectPage")
    assert.equal(component, RedirectPage)
  })

  it("The getPageComponent returns the ContentPage component", () => {
    const component = getPageComponent("ContentPage")
    assert.equal(component, ContentPage)
  })
})
