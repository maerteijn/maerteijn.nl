import { assert } from "chai"

import modules from "../../../dist/test"

import { createComponent } from "../../utils"

describe("Not found page", () => {
  it("We can initialize a Not Found page", () => {
    const wrapper = createComponent(modules.NotFoundPage)
    assert.equal(wrapper.name(), "not-found-page")
  })

  it("A link to the root page is rendered", () => {
    const wrapper = createComponent(modules.NotFoundPage)
    assert.isTrue(wrapper.find("a.router-link-active").exists())
    assert.include(wrapper.text(), "Is it me you are")
  })
})
