<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import { actions } from "./js/store"
export default {
  created() {
    actions
      .loadStructure("./content/structure.json")
      .catch((e) => console.error)
  },
}
</script>
