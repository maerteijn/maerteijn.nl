<template>
  <div class="content" v-if="content" v-html="renderedMarkdown"></div>
</template>

<script>
import { renderMarkdown } from "../markdown"

export default {
  name: "markdown-viewer",
  props: {
    content: String,
  },
  computed: {
    renderedMarkdown() {
      const markdown = this.content || ""
      return renderMarkdown(markdown)
    },
  },
}
</script>

<style lang="scss">
.content {
  img {
    box-shadow: 2px 3px 5px 0 variables.$drop-shadow-color;
    cursor: pointer;
    margin: 0.25rem 0.75rem;
    margin-left: 0;
  }

  p {
    clear: both;
  }

  img[src*="#left"] {
    float: left;
    margin-left: 0;
  }

  img[src*="#right"] {
    float: right;
    margin-right: 0;
  }

  table thead th {
    white-space: nowrap;
  }
}
</style>
