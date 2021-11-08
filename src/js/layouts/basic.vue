<template>
  <div class="basic-layout">
    <div class="nav">
      <logo mode="small"></logo>
      <navigation></navigation>
      <div class="icons">
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
  color: variables.$font-color-left;
  margin: 0 auto;
  max-width: bulma.$tablet;
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

  .page {
    * {
      color: variables.$font-color-left;
    }

    code {
      color: variables.$orange-color;
    }

    a {
      text-decoration: underline;
    }
  }

  .nav {
    align-items: center;
    display: flex;
    padding: 0 0 1rem;

    .navigation {
      background-color: variables.$background-color-left-second;
    }

    a {
      color: variables.$font-color-left;
    }

    .icons {
      display: flex;
      margin-left: auto;
    }

    .item {
      padding-right: 1rem;
    }
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
    .nav {
      a:hover {
        color: variables.$orange-color;
      }
    }
  }
}
</style>
