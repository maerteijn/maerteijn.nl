<template>
  <div class="loading-component" v-if="show">
    <figure class="image is-64x64">
      <img
        title="Loading"
        src="../../assets/images/spinner-light.gif"
        v-if="spinner == 'light'"
      />
      <img title="Loading" src="../../assets/images/spinner-dark.gif" v-else />
    </figure>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    spinner: {
      type: String,
      default: "light",
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss">
.loading-component {
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
