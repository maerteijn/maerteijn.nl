import showdown from "showdown"
import showdownHighlight from "showdown-highlight"

import hljs from "highlight.js/lib/core"
import python from "highlight.js/lib/languages/python"
hljs.registerLanguage("python", python)

import "highlight.js/styles/monokai-sublime.css"

const converter = new showdown.Converter({
  extensions: [showdownHighlight({ pre: true })],
})
converter.setOption("parseImgDimensions", true)
converter.setOption("emoji", true)
converter.setOption("tables", true)
converter.setFlavor("github")
converter.setOption("openLinksInNewWindow", true)

export const renderMarkdown = (content) => {
  return converter.makeHtml(content)
}
