<template>
  <div class="last-updated" v-if="updated">
    Last update: <span>{{ updated }}</span>
  </div>
</template>

<script>
export default {
  name: "last-updated",
  computed: {
    updated() {
      return this.$state.lastUpdated
    },
  },
}
</script>

<style lang="scss">
.last-updated {
  @include animation(3s);
  font-size: 0.75em;
  font-style: italic;
  padding-bottom: 1rem;
}
</style>
