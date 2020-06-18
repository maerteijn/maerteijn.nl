<template>
  <div class="backlink">
    <router-link v-bind:to="path"
      ><span v-html="icon('fas-arrow-circle-left')"></span>
      {{ title }}</router-link
    >
  </div>
</template>

<script>
import { getIcon } from "../icons"

export default {
  name: "backlink",
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    icon: getIcon,
  },
}
</script>

<style lang="scss">
.backlink {
  margin: 1rem 0;
}

@media print {
  .backlink {
    display: none;
  }
}
</style>
