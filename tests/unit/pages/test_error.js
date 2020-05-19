import { assert } from "chai"

import modules from "../../../dist/test"

import { createComponent } from "../../utils"

describe("Error page", () => {
  it("We can initialize an Error page", () => {
    const wrapper = createComponent(modules.ErrorPage, { error: "" })
    assert.equal(wrapper.name(), "error-page")
  })

  it("The component renders as expected", () => {
    const wrapper = createComponent(modules.ErrorPage, { error: "" })
    assert.isFalse(wrapper.find(".error-message").exists())

    // now update the message
    wrapper.setProps({ error: "Oh no!" })
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
    })
  })
})
