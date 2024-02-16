import { assert } from "vitest"

import { createWrapperForComponent } from "../../utils"

import BackLink from "@/js/components/backlink"

describe("BackLink component", () => {
  it("We can initialize a BackLink component", () => {
    const wrapper = createWrapperForComponent(BackLink, {
      title: "Hello",
      path: "/is/it/me",
    })
    assert.equal(wrapper.vm.$options.name, "backlink")
    wrapper.unmount()
  })

  it("The BackLink component renders a link when path and title are given", () => {
    const wrapper = createWrapperForComponent(BackLink, {
      title: "Hello",
      path: "/is/it/me",
    })
    assert.isTrue(wrapper.find(".backlink").exists())
    assert.equal(wrapper.find("router-link-stub").attributes("to"), "/is/it/me")
    wrapper.unmount()
  })
})
