import { assert } from "chai"
import Vue from "vue"

import getContentComponent from "@/js/components/utils"
import MarkdownViewer from "@/js/components/markdown-viewer"
import LastUpdated from "@/js/components/last-updated"

describe("Test component utils", () => {
  it("The getContentComponent returns undefined when the contentcomponent is not known", () => {
    assert.isUndefined(getContentComponent("unknown"))
  })
  it("The getContentComponent returns the MarkdownViewer component", () => {
    const component = getContentComponent("MarkdownViewer")
    assert.equal(component, MarkdownViewer)
  })
  it("The getContentComponent returns the LastUpdated component", () => {
    const component = getContentComponent("LastUpdated")
    assert.equal(component, LastUpdated)
  })
})
