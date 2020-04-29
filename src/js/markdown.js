import showdown from "showdown"

const converter = new showdown.Converter()
converter.setOption("parseImgDimensions", true)

export const renderMarkdown = (content) => {
  return converter.makeHtml(content)
}
