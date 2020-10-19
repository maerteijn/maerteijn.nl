import { assert } from "chai"

import { createComponent } from "../../utils"

import ErrorPage from "@/js/pages/error"

describe("Error page", () => {
  it("We can initialize an Error page", () => {
    const wrapper = createComponent(ErrorPage, { error: "" })
    assert.equal(wrapper.vm.$options.name, "error-page")
  })

  it("The component renders as expected", () => {
    const wrapper = createComponent(ErrorPage, { error: "" })
    assert.isFalse(wrapper.find(".error-message").exists())

    // now update the message
    wrapper.setProps({ error: "Oh no!" })
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
    })
  })
})
