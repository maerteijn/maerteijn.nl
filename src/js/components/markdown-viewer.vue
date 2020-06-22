<template>
  <div class="content" v-if="content" v-html="renderedMarkdown"></div>
</template>

<script>
import { renderMarkdown } from "../markdown"
import { createImageViewer } from "../utils"

export default {
  name: "markdown-viewer",
  props: {
    content: String,
  },
  computed: {
    renderedMarkdown() {
      return renderMarkdown(this.content || "")
    },
  },
  methods: {
    createImageViewer: createImageViewer,
    createRouterLink(link) {
      link.onclick = () => {
        this.$router.push(link.attributes.href.nodeValue)
        return false
      }
    },
  },
  mounted() {
    // create a image overlay for each image in the content
    this.$el.querySelectorAll("img").forEach((image) => {
      this.createImageViewer(image)
    })

    // convert all internal links in the rendered content to vue router calls
    this.$el
      .querySelectorAll('a[href^="/"]')
      .forEach((link) => this.createRouterLink(link))
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

  table {
    th:empty {
      display: none;
    }

    td:first-child {
      white-space: nowrap;
    }
  }

  p,
  ul {
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

  table thead th:not([align]) {
    text-align: left;
    white-space: nowrap;
  }
}
</style>
