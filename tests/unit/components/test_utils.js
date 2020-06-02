import { assert } from "chai"
import Vue from "vue"

import modules from "../../../dist/test"

describe("Test pages utils", () => {
  it("The getContentComponent returns undefined when the contentcomponent is not known", () => {
    assert.isUndefined(modules.getContentComponent("unknown"))
  })

  it("The getContentComponent returns the MarkdownViewer component", () => {
    const component = modules.getContentComponent("MarkdownViewer")
    assert.equal(component, modules.MarkdownViewer)
  })
})
