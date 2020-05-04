<template>
  <div class="last-updated" v-if="lastUpdated">
    Last update: <span>{{ lastUpdated }}</span>
  </div>
</template>

<script>
export default {
  name: "last-updated",
  computed: {
    lastUpdated() {
      return process.env.BUILD_TIME
    },
  },
}
</script>

<style lang="scss">
.last-updated {
  font-size: 0.75em;
  font-style: italic;
}
</style>
