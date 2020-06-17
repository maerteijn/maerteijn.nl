<template>
  <div class="switch-language" v-if="canSwitch">
    <a v-bind:title="switchTo">
      <div
        id="switch-language"
        class="icon"
        v-html="icon('fas-flag')"
        v-on:click="switchLanguage"
      ></div>
    </a>
  </div>
</template>

<script>
import { getIcon } from "../icons"
import { getters } from "../store"

export default {
  name: "switch-language",
  computed: {
    switchTo() {
      return getters.getSwitchableLanguage(this.$route.path)
    },
    canSwitch() {
      return getters.getPagesForLanguage(this.switchTo).length > 0
    },
  },
  methods: {
    icon: getIcon,
    switchLanguage() {
      window.localStorage.language = this.switchTo
      const translated_page =
        getters.getTranslatedPages(this.$route.path, this.switchTo)[0] ||
        getters.getPagesForLanguage(this.switchTo)[0]
      this.$router.push(translated_page.path)
    },
  },
}
</script>
