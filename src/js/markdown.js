import showdown from "showdown"

const converter = new showdown.Converter()
converter.setOption("parseImgDimensions", true)
converter.setOption("emoji", true)
converter.setOption("tables", true)
converter.setFlavor("github")
converter.setOption("openLinksInNewWindow", true)

export const renderMarkdown = (content) => {
  return converter.makeHtml(content)
}
