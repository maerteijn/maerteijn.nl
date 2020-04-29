<template>
  <default-layout>
    Is it <router-link v-bind:to="{ path: '/' }">me</router-link> you are
    looking for?
  </default-layout>
</template>

<script>
export default {
  name: "not-found-page",
}
</script>
