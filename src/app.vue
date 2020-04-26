<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  created() {
    console.log("Load content here")
  },
}
</script>
