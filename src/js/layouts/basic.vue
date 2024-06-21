<template>
  <div class="basic-layout">
    <div class="nav">
      <logo mode="small"></logo>
      <div class="icons">
        <navigation></navigation>
        <switch-layout></switch-layout>
        <switch-language></switch-language>
      </div>
    </div>
    <slot name="default"></slot>
  </div>
</template>

<script>
import Logo from "../components/logo"
import Navigation from "../components/navigation"
import SwitchLayout from "../components/switch-layout"
import SwitchLanguage from "../components/switch-language"

export default {
  name: "layout-basic",
  components: {
    logo: Logo,
    navigation: Navigation,
    "switch-layout": SwitchLayout,
    "switch-language": SwitchLanguage,
  },
}
</script>

<style lang="scss">
.basic-layout {
  margin: 0 auto;
  max-width: variables.$desktop;
  padding: 1rem;

  .icon {
    padding: 0 0.5rem;
  }

  .logo {
    figure.logo {
      cursor: pointer;
      margin-right: 1rem;
      width: 2.5rem;
    }
  }

  .nav {
    align-items: center;
    display: flex;
    padding: 0 0 1rem;

    .navigation-component {
      padding-right: 1rem;
    }

    a {
      color: variables.$white;
    }

    .icons {
      display: flex;
      margin-left: auto;
    }

    .item {
      padding-right: 1rem;
    }
  }

  .backlink a {
    color: variables.$white;
  }
}

@media print {
  .basic-layout {
    .nav {
      display: none;
    }
  }
}

@media (hover: hover) {
  .basic-layout {
    a:hover {
      color: var(--bulma-orange);
    }
  }
}
</style>
