<template>
  <div class="switch-layout" v-if="!isIE11()">
    <a title="Switch layout">
      <div
        id="switch-layout"
        class="icon"
        v-html="icon('fas-adjust')"
        v-on:click="toggleLayout"
      ></div>
    </a>
  </div>
</template>

<script>
import { getIcon } from "../icons"
import { isIE11 } from "../utils"

export default {
  name: "switch-layout",
  methods: {
    isIE11: isIE11,
    icon: getIcon,
    toggleLayout() {
      const layouts = {
        "basic-layout": "default-layout",
        "default-layout": "basic-layout",
      }
      this.$state.layout = layouts[this.$state.layout]
      this.$emit("layout-toggled", this.$state.layout)
    },
  },
}
</script>
