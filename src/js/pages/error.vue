<template>
  <component v-bind:is="$state.layout">
    <div class="content error-message" v-if="error">
      <h1>Oops, something went wrong!</h1>
      <code>{{ error }}</code>
    </div>
  </component>
</template>

<script>
export default {
  name: "error-page",
  props: {
    error: {
      type: String,
    },
  },
}
</script>
