<template>
  <default-layout>
    Is it <router-link v-bind:to="{ name: 'home' }">me</router-link> you are
    looking for?
  </default-layout>
</template>

<script>
export default {
  name: "not-found",
}
</script>
