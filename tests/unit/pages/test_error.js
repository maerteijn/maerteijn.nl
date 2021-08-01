import { assert } from "chai"

import { createWrapperForComponent } from "../../utils"

import ErrorPage from "@/js/pages/error"

describe("Error page", () => {
  it("We can initialize an Error page", () => {
    const wrapper = createWrapperForComponent(ErrorPage, { error: "" })
    assert.equal(wrapper.vm.$options.name, "error-page")
  })

  it("The component renders as expected", () => {
    const wrapper = createWrapperForComponent(ErrorPage, { error: "" })
    assert.isFalse(wrapper.find(".error-message").exists())

    // now update the message
    wrapper.setProps({ error: "Oh no!" })
    return wrapper.vm.$nextTick().then(() => {
      assert.isTrue(wrapper.find(".error-message").exists())
    })
  })
})
