<template>
  <default-layout>
    <div class="content" v-html="renderedMarkdown"></div>
  </default-layout>
</template>

<script>
import axios from "axios"

import { renderMarkdown } from "../markdown"
import { actions, getters } from "../store"

export default {
  name: "content-page",
  computed: {
    content() {
      return getters.getContent(this.$route.path)
    },
    renderedMarkdown() {
      const markdown = this.content || ""
      return renderMarkdown(markdown)
    },
    loaded() {
      return this.$state.loaded
    },
    page_metadata() {
      return getters.getPageMetaData(this.$route.path)
    },
  },
  watch: {
    loaded: {
      immediate: true,
      handler(loaded) {
        if (loaded) {
          actions.downloadContent(this.$route.path)
          document.title = this.page_metadata.title
        }
      },
    },
  },
}
</script>

<style lang="scss">
.content {
  img {
    border-radius: 1%;
    box-shadow: 1px 1px 8px variables.$drop-shadow-color;
    margin-right: 0.75rem;
  }

  img[src*="#left"] {
    float: left;
  }

  img[src*="#right"] {
    float: right;
  }
}
</style>
