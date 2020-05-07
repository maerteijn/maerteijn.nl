<template>
  <default-layout>
    <div class="page">
      <div class="content" v-html="renderedMarkdown"></div>
      <lastupdated v-bind:updated="build_time"></lastupdated>
    </div>
  </default-layout>
</template>

<script>
import axios from "axios"

import LastUpdated from "../components/last-updated"

import { renderMarkdown } from "../markdown"
import { actions, getters } from "../store"

export default {
  name: "content-page",
  computed: {
    build_time() {
      return process.env.BUILD_TIME || "unknown"
    },
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
  components: {
    lastupdated: LastUpdated,
  },
}
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    flex-grow: 1;

    img {
      border-radius: 1%;
      box-shadow: 1px 1px 8px variables.$drop-shadow-color;
      margin: 0.25rem 0.75rem;
    }

    img[src*="#left"] {
      float: left;
      margin-left: 0;
    }

    img[src*="#right"] {
      float: right;
      margin-right: 0;
    }
  }
}
</style>
