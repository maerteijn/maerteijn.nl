<template>
  <div class="last-updated" v-if="updated">
    Last update: <span>{{ updated }}</span>
  </div>
</template>

<script>
export default {
  name: "last-updated",
  props: {
    updated: String,
  },
}
</script>

<style lang="scss">
.last-updated {
  font-size: 0.75em;
  font-style: italic;
}
</style>
