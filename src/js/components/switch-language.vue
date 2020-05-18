<template>
  <div class="switch-language" v-if="canSwitch">
    <a v-bind:title="switchTo">
      <div
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
      this.$router.push(getters.getPagesForLanguage(this.switchTo)[0].path)
      this.$emit("language-switched", this.language)
    },
  },
}
</script>
