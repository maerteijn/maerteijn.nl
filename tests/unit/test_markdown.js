import { assert } from "chai"

import { renderMarkdown } from "@/js/markdown"

const markdown = `
# Header

This is a paragraph
`
describe("Test markdown", () => {
  it("The markdown renderer works as expected", () => {
    const html = renderMarkdown(markdown)
    assert.include(html, '<h1 id="header">Header</h1>')
    assert.include(html, "<p>This is a paragraph</p>")
  })

  it("The markdown renderer support Emojis", () => {
    const html = renderMarkdown(":smile:")
    assert.equal(html, "<p>😄</p>")
  })
})
