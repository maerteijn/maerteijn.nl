<template>
  <component v-bind:is="$state.layout">
    <div class="page">
      <loading
        v-bind:show="!content"
        v-bind:spinner="$state.layout == 'default-layout' ? 'light' : 'dark'"
      ></loading>
      <div class="content" v-html="renderedMarkdown"></div>
      <lastupdated v-bind:updated="lastUpdated"></lastupdated>
    </div>
  </component>
</template>

<script>
import axios from "axios"

import LastUpdated from "../components/last-updated"
import Loading from "../components/loading"

import { renderMarkdown } from "../markdown"
import { actions, getters } from "../store"

export default {
  name: "content-page",
  computed: {
    lastUpdated() {
      return this.$state.lastUpdated
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
        if (loaded && this.$route.path) {
          actions
            .downloadContent(this.$route.path)
            .catch((e) => this.$root.$emit("error", e))
        }
      },
    },
    page_metadata: {
      immediate: true,
      handler(metadata) {
        document.title = metadata.title || ""
        const language = metadata.settings && metadata.settings.language
        document.querySelector("html").setAttribute("lang", language)
      },
    },
  },
  components: {
    lastupdated: LastUpdated,
    loading: Loading,
  },
}
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    animation: fadeIn ease 1s;
    flex-grow: 1;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
}
</style>
