<template>
<div class="main">
  <h1>Welcome to maerteijn's vue.js website</h1>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
h1 {
  color: #FB7516;
  font-size: 5.75vw;
}
</style>