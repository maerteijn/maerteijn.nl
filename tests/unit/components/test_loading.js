import { assert } from "chai"

import { createComponent } from "../../utils"

import Loading from "@/js/components/loading"

describe("Loading component", () => {
  it("We can initialize a Loading component", () => {
    const wrapper = createComponent(Loading)
    assert.equal(wrapper.vm.$options.name, "loading")
  })

  it("The loading component will only render when the show property is set to true", () => {
    const wrapper = createComponent(Loading)
    assert.isTrue(wrapper.find(".loading-component").exists())

    wrapper.setProps({ show: false })
    return wrapper.vm.$nextTick().then(() => {
      assert.isFalse(wrapper.find(".loading-component").exists())
    })
  })

  it("The loading component uses the light spinner as default", () => {
    const wrapper = createComponent(Loading)
    assert.equal(wrapper.vm.spinner, "light")
    assert.include(wrapper.find("img").attributes("src"), "spinner-light")
  })

  it("We can also set the dark spinner as a property", () => {
    const wrapper = createComponent(Loading, { spinner: "dark" })
    assert.equal(wrapper.vm.spinner, "dark")
    assert.include(wrapper.find("img").attributes("src"), "spinner-dark")
  })
})
