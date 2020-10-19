import { assert } from "chai"
import sinon from "sinon"

import { createComponent } from "../../utils"

import MarkdownViewer from "@/js/components/markdown-viewer"

describe("Markdown viewer component", () => {
  it("We can initialize a Markdown component", function () {
    const wrapper = createComponent(MarkdownViewer, {
      content: "hi!",
    })
    assert.equal(wrapper.vm.$options.name, "markdown-viewer")
  })

  it("The renderedMarkdown computed property works as expected", function () {
    const wrapper = createComponent(MarkdownViewer, {
      content: "# Hello!",
    })
    assert.equal(wrapper.vm.renderedMarkdown, '<h1 id="hello">Hello!</h1>')
  })

  it("And it renders the markdown in the template", function () {
    const wrapper = createComponent(MarkdownViewer, {
      content: "# Hello!",
    })
    assert.include(wrapper.html(), '<h1 id="hello">Hello!</h1>')
  })

  it("The component should call the createImageViewer method", function () {
    MarkdownViewer.methods.createImageViewer = sinon.spy(
      MarkdownViewer.methods.createImageViewer
    )

    // no image? then the image viewer should not be called
    createComponent(MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(MarkdownViewer.methods.createImageViewer.called)

    // when there is, it should cal it
    const wrapper = createComponent(MarkdownViewer, {
      content: "![Photo](/images/photo-small.jpg#left =120x*)",
    })
    assert.isTrue(MarkdownViewer.methods.createImageViewer.called)
    sinon.restore()
  })

  it("The component calls the createRouterLink function for internal links", function () {
    MarkdownViewer.methods.createRouterLink = sinon.spy(
      MarkdownViewer.methods.createRouterLink
    )

    // no link? then the create router link method should not be called
    createComponent(MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(MarkdownViewer.methods.createRouterLink.called)

    // when there is, it should cal it
    const wrapper = createComponent(MarkdownViewer, {
      content: "[My link](/to/an/internal/link)",
    })
    assert.isTrue(MarkdownViewer.methods.createRouterLink.called)
    sinon.restore()
  })
})
