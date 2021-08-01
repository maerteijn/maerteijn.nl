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
  created() {
    actions
      .loadSite("/content/site.json")
      .then(() => this.resetError())
      .catch((e) => this.handleError(e))
  },
  errorCaptured(error, component, details) {
    // capture all vue errors and handle them with handleError
    this.handleError(error)
  },
  methods: {
    resetError() {
      this.$state.error = null
    },
    handleError(error) {
      this.$state.error = error.toString()
    },
  },
  components: {
    "error-page": ErrorPage,
  },
}
</script>
