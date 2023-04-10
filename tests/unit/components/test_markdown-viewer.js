import { assert } from "chai"
import sinon from "sinon"

import { createWrapperForComponent } from "../../utils"

import MarkdownViewer from "@/js/components/markdown-viewer"

describe("Markdown viewer component", () => {
  it("We can initialize a Markdown component", function () {
    const wrapper = createWrapperForComponent(MarkdownViewer, {
      content: "hi!",
    })
    assert.equal(wrapper.vm.$options.name, "markdown-viewer")
    wrapper.unmount()
  })

  it("The renderedMarkdown computed property works as expected", function () {
    const wrapper = createWrapperForComponent(MarkdownViewer, {
      content: "# Hello!",
    })
    assert.equal(wrapper.vm.renderedMarkdown, '<h1 id="hello">Hello!</h1>')
    wrapper.unmount()
  })

  it("And it renders the markdown in the template", function () {
    const wrapper = createWrapperForComponent(MarkdownViewer, {
      content: "# Hello!",
    })
    assert.include(wrapper.html(), '<h1 id="hello">Hello!</h1>')
    wrapper.unmount()
  })

  it("The component should call the createImageViewer method", function () {
    MarkdownViewer.methods.createImageViewer = sinon.spy(
      MarkdownViewer.methods.createImageViewer
    )

    // no image? then the image viewer should not be called
    let wrapper = createWrapperForComponent(MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(MarkdownViewer.methods.createImageViewer.called)
    wrapper.unmount()

    // when there is, it should cal it
    wrapper = createWrapperForComponent(MarkdownViewer, {
      content: "![Photo](/images/photo-small.jpg#left =120x*)",
    })
    assert.isTrue(MarkdownViewer.methods.createImageViewer.called)
    sinon.restore()
    wrapper.unmount()
  })

  it("The component should call the createImageSrc method", function () {
    MarkdownViewer.methods.createImageSrc = sinon.spy(
      MarkdownViewer.methods.createImageSrc
    )

    // no image? then the image viewer should not be called
    let wrapper = createWrapperForComponent(MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(MarkdownViewer.methods.createImageSrc.called)
    wrapper.unmount()

    // when there is, it should cal it
    wrapper = createWrapperForComponent(MarkdownViewer, {
      content: "![Photo](/images/photo-small.jpg#left =120x*)",
    })
    assert.isTrue(MarkdownViewer.methods.createImageSrc.called)
    sinon.restore()
    wrapper.unmount()
  })

  it("The component calls the createRouterLink function for internal links", function () {
    MarkdownViewer.methods.createRouterLink = sinon.spy(
      MarkdownViewer.methods.createRouterLink
    )

    // no link? then the create router link method should not be called
    let wrapper = createWrapperForComponent(MarkdownViewer, { content: "#Hi!" })
    assert.isFalse(MarkdownViewer.methods.createRouterLink.called)
    wrapper.unmount()

    // when there is, it should cal it
    wrapper = createWrapperForComponent(MarkdownViewer, {
      content: "[My link](/to/an/internal/link)",
    })
    assert.isTrue(MarkdownViewer.methods.createRouterLink.called)
    sinon.restore()
    wrapper.unmount()
  })
})
