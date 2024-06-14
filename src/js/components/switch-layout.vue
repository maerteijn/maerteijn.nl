<template>
  <div class="switch-layout" v-if="!isOldBrowser()">
    <a title="Switch layout" href="#" onclick="return false;">
      <div
        id="switch-layout"
        class="icon"
        v-html="icon('fas-circle-half-stroke')"
        v-on:click="toggleLayout"
      ></div>
    </a>
  </div>
</template>

<script>
import { getIcon } from "../icons"
import { isOldBrowser } from "../utils"

export default {
  name: "switch-layout",
  methods: {
    isOldBrowser: isOldBrowser,
    icon: getIcon,
    toggleLayout() {
      const layouts = {
        "basic-layout": "default-layout",
        "default-layout": "basic-layout",
      }
      this.$state.layout = layouts[this.$state.layout]
      window.localStorage.layout = this.$state.layout
      this.$emit("layout-toggled", this.$state.layout)
    },
  },
}
</script>
