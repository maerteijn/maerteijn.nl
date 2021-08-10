<template>
  <div class="switch-language" v-if="canSwitch">
    <template v-for="language in availableLanguages">
      <span v-if="language != currentLanguage"
        ><a
          id="switch-language"
          title="Switch language"
          href="/"
          onclick="return false;"
          v-on:click="switchLanguage(language)"
          >{{ language }}</a
        ></span
      >
    </template>
  </div>
</template>

<script>
import { getters, state } from "../store"

export default {
  name: "switch-language",
  computed: {
    availableLanguages() {
      return Object.keys(state.site.site_settings.languages)
    },
    currentLanguage() {
      return getters.getCurrentLanguage(this.$route.path)
    },
    canSwitch() {
      return this.availableLanguages.length > 0
    },
  },
  methods: {
    switchLanguage(language) {
      window.localStorage.language = language
      const translated_page =
        getters.getTranslatedPages(this.$route.path, language)[0] ||
        getters.getPagesForLanguage(language)[0]
      this.$router.push(translated_page.path)
    },
  },
}
</script>

<style lang="scss">
.switch-language {
  span {
    padding: 0 0.2rem;
  }
}
</style>
