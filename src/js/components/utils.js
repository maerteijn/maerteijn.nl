import MarkdownViewer from "./markdown-viewer"
import LastUpdated from "./last-updated"

const types = {
  MarkdownViewer: MarkdownViewer,
  LastUpdated: LastUpdated,
}

export default (name) => types[name]
