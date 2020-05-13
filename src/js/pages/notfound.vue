<template>
  <component v-bind:is="$state.layout">
    <div class="content">
      <h1>Not Found</h1>
      Is it <router-link v-bind:to="{ path: '/' }">me</router-link> you are
      looking for?
    </div>
  </component>
</template>

<script>
export default {
  name: "not-found-page",
}
</script>
