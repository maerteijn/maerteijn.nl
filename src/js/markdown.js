import showdown from "showdown"

import hljs from "highlight.js/lib/core"
import python from "highlight.js/lib/languages/python"
import bash from "highlight.js/lib/languages/bash"
import shell from "highlight.js/lib/languages/shell"
hljs.registerLanguage("python", python)
hljs.registerLanguage("bash", bash)
hljs.registerLanguage("shell", shell)

import "highlight.js/styles/monokai-sublime.css"

const converter = new showdown.Converter({
  extensions: [],
})
converter.setOption("parseImgDimensions", true)
converter.setOption("emoji", true)
converter.setOption("tables", true)
converter.setFlavor("github")
converter.setOption("openLinksInNewWindow", true)

export const renderMarkdown = (content) => {
  return converter.makeHtml(content)
}

export const applyHighlight = () => hljs.highlightAll()
