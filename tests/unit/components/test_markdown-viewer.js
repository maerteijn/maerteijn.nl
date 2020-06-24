import { assert } from "chai"
import sinon from "sinon"

import modules from "../../../dist/test"
import { createComponent } from "../../utils"

describe("Markdown viewer component", () => {
  it("We can initialize a Markdown component", function () {
    const wrapper = createComponent(modules.MarkdownViewer, {
      content: "hi!",
    })
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

  it("The component should call the createImageViewer method", function () {
    modules.MarkdownViewer.methods.createImageViewer = sinon.spy(
      modules.MarkdownViewer.methods.createImageViewer
    )

    // no image? then the image viewer should not be called
    createComponent(modules.MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(modules.MarkdownViewer.methods.createImageViewer.called)

    // when there is, it should cal it
    const wrapper = createComponent(modules.MarkdownViewer, {
      content: "![Photo](/images/photo-small.jpg#left =120x*)",
    })
    assert.isTrue(modules.MarkdownViewer.methods.createImageViewer.called)
    sinon.restore()
  })

  it("The component calls the createRouterLink function for internal links", function () {
    modules.MarkdownViewer.methods.createRouterLink = sinon.spy(
      modules.MarkdownViewer.methods.createRouterLink
    )

    // no link? then the create router link method should not be called
    createComponent(modules.MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(modules.MarkdownViewer.methods.createRouterLink.called)

    // when there is, it should cal it
    const wrapper = createComponent(modules.MarkdownViewer, {
      content: "[My link](/to/an/internal/link)",
    })
    assert.isTrue(modules.MarkdownViewer.methods.createRouterLink.called)
    sinon.restore()
  })
})
