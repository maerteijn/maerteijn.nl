<template>
  <div class="content">404</div>
</template>

<script>
import { getters } from "../store"

export default {
  name: "redirect-page",
  created() {
    const language =
      window.localStorage.language ||
      this.$state.site.site_settings.default_language
    const pages = getters.getPagesForLanguage(language)

    if (pages.length > 0) {
      this.$router.push(pages[0].path)
    } else {
      this.$root.$emit(
        "error",
        new Error(`Can't find any page for language ${language}`)
      )
    }
  },
}
</script>
