<template>
  <component v-bind:is="$state.layout">
    <div class="page">
      <loading
        v-bind:show="!content"
        v-bind:spinner="$state.layout == 'default-layout' ? 'light' : 'dark'"
      ></loading>
      <component
        v-bind:is="content_component"
        v-if="content"
        v-bind:content="content"
      ></component>
      <backlink
        v-bind:title="backlink.title"
        v-bind:path="backlink.path"
        v-if="backlink"
      ></backlink>
      <component
        v-bind:is="footer_component"
        v-if="footer_component"
      ></component>
    </div>
  </component>
</template>

<script>
import getContentComponent from "../components/utils"
import Loading from "../components/loading"
import BackLink from "../components/backlink"
import { actions, getters } from "../store"

export default {
  name: "content-page",
  computed: {
    content() {
      return getters.getContent(this.$route.path)
    },
    loaded() {
      return this.$state.loaded
    },
    page_metadata() {
      return getters.getPageMetaData(this.$route.path)
    },
    content_component() {
      const metadata = getters.getPageMetaData(this.$route.path)
      return (
        metadata.content_component &&
        getContentComponent(metadata.content_component)
      )
    },
    footer_component() {
      const metadata = getters.getPageMetaData(this.$route.path)
      return (
        metadata.footer_component &&
        getContentComponent(metadata.footer_component)
      )
    },
    backlink() {
      const metadata = getters.getPageMetaData(this.$route.path)
      return metadata.settings && metadata.settings.backlink
    },
  },
  watch: {
    loaded: {
      immediate: true,
      handler(loaded) {
        if (loaded && this.$route.path) {
          actions
            .downloadContent(this.$route.path)
            .catch((e) => actions.handleError(e))
        }
      },
      deep: true,
    },
    page_metadata: {
      immediate: true,
      handler(metadata) {
        document.title = metadata.title || ""
        const language = metadata.settings && metadata.settings.language
        document.querySelector("html").setAttribute("lang", language)

        // Update meta tags:
        document
          .getElementsByTagName("meta")
          ["title"].setAttribute("content", metadata.title)

        document
          .getElementsByTagName("meta")
          ["description"].setAttribute("content", metadata.description)
      },
      deep: true,
    },
  },
  components: {
    loading: Loading,
    backlink: BackLink,
  },
}
</script>

<style lang="scss">
.page {
  flex-grow: 1;
  padding-bottom: 1rem;

  .content {
    @include animation(0.5s);

    img {
      @include animation(0.75s);
    }

    table {
      @include animation(1s);
    }

    p {
      clear: both;
      padding-top: 0.25rem;
    }

    h2,
    h3,
    h4 {
      clear: both;
      padding-top: 0.5rem;
    }
  }
}
</style>
