<template>
  <component v-bind:is="$state.layout">
    <div class="page">
      <div class="content" v-html="renderedMarkdown"></div>
      <lastupdated v-bind:updated="lastUpdated"></lastupdated>
    </div>
  </component>
</template>

<script>
import axios from "axios"

import LastUpdated from "../components/last-updated"

import { renderMarkdown } from "../markdown"
import { actions, getters } from "../store"

export default {
  name: "content-page",
  computed: {
    lastUpdated() {
      return this.$state.lastUpdated
    },
    renderedMarkdown() {
      const markdown = getters.getContent(this.$route.path) || ""
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
        if (loaded && this.$route.path) {
          actions
            .downloadContent(this.$route.path)
            .then(() => {
              document.title = this.page_metadata.title || ""
            })
            .catch(console.error)
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
  }
}
</style>
