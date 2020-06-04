import { assert } from "chai"

import modules from "../../../dist/test"

import { createComponent } from "../../utils"

describe("Markdown viewer component", () => {
  it("We can initialize a Markdown component", () => {
    const wrapper = createComponent(modules.MarkdownViewer)
    assert.equal(wrapper.vm.$options.name, "markdown-viewer")
  })

  it("The renderedMarkdown computed property works as expected", function () {
    const wrapper = createComponent(modules.MarkdownViewer, {
      content: "# Hello!",
    })
    assert.equal(wrapper.vm.renderedMarkdown, '<h1 id="hello">Hello!</h1>')
  })

  it("And it renders the markdown in the template", function () {
    const wrapper = createComponent(modules.MarkdownViewer, {
      content: "# Hello!",
    })
    assert.include(wrapper.html(), '<h1 id="hello">Hello!</h1>')
  })
})
