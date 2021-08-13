<template>
  <error-page
    v-bind:key="$state.error"
    v-bind:error="$state.error || ''"
    v-if="$state.error"
  ></error-page>
  <router-view v-bind:key="$route.path" v-else></router-view>
</template>

<script>
import { actions } from "./js/store"
import ErrorPage from "./js/pages/error"

export default {
  name: "app",
  errorCaptured(error, component, details) {
    // capture all vue errors and handle them with handleError
    actions.handleError(error)
  },
  components: {
    "error-page": ErrorPage,
  },
}
</script>
