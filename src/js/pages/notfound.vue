<template>
  <div class="content">404</div>
</template>

<script>
export default {
  name: "not-found-page",
  created() {
    if (this.$state.structure.pages.length > 1) {
      const default_path = this.$state.structure.pages[0].path
      this.$router.push(default_path)
    }
  },
}
</script>
