import { assert } from "chai"

import { createComponent } from "../../utils"

import BackLink from "@/js/components/backlink"

describe("BackLink component", () => {
  it("We can initialize a LastUpdated component", () => {
    const wrapper = createComponent(BackLink, {
      title: "Hello",
      path: "/is/it/me",
    })
    assert.equal(wrapper.vm.$options.name, "backlink")
  })

  it("The last updated component renders a link when path and title are given", () => {
    const wrapper = createComponent(BackLink, {
      title: "Hello",
      path: "/is/it/me",
    })
    assert.isTrue(wrapper.find(".backlink").exists())
    assert.equal(wrapper.find("a").attributes("href"), "/is/it/me")
  })
})
