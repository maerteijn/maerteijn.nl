import { assert } from "chai"

import { createComponent } from "../../utils"

import LastUpdated from "@/js/components/last-updated"

import store from "@/js/store"

describe("Last updated component", () => {
  it("We can initialize a LastUpdated component", () => {
    const wrapper = createComponent(LastUpdated)
    assert.equal(wrapper.vm.$options.name, "last-updated")
  })

  it("The last updated component renders nothing when no updated property is given", () => {
    store.state.lastUpdated = undefined
    const wrapper = createComponent(LastUpdated)
    assert.isEmpty(wrapper.html())
  })

  it("The lastUpdated computed property works as expected", function () {
    store.state.lastUpdated = "unknown"
    const wrapper = createComponent(LastUpdated)
    assert.equal(wrapper.vm.updated, "unknown")

    store.state.lastUpdated = "today"
    assert.equal(wrapper.vm.updated, "today")
    return wrapper.vm.$nextTick().then(() => {
      assert.include(wrapper.html(), "<span>today</span>")
    })
  })
})
