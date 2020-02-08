<template>
<div class="main">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>

</div>
</template>

<script>
import { state, actions } from "./js/store"

export default {
   computed: {
      content() {
        return state.content
      }
    },
    created() {
      actions.fetchJsonContent()
    }
}
</script>
