import MarkdownViewer from "./markdown-viewer"

const types = {
  MarkdownViewer: MarkdownViewer,
}

export default (name) => types[name]
