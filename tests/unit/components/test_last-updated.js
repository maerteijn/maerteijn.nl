import { assert } from "chai"

import modules from "../../../dist/test"

import { createComponent } from "../../utils"

describe("Last updated component", () => {
  it("We can initialize a LastUpdated component", () => {
    const wrapper = createComponent(modules.LastUpdated)
    assert.equal(wrapper.name(), "last-updated")
  })

  it("The last updated component renders nothing when no updated property is given", () => {
    const wrapper = createComponent(modules.LastUpdated)
    assert.isEmpty(wrapper.html())
  })

  it("The last updated component renders something useful when the updated property is given", () => {
    const wrapper = createComponent(modules.LastUpdated, {
      updated: "Just now",
    })
    assert.isTrue(wrapper.find(".last-updated").exists())
    assert.include(wrapper.html(), "<span>Just now</span>")
  })
})
