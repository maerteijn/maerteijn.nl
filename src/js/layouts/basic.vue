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
  color: variables.$font-color-left;
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

  .page {
    h1,
    h2,
    h3,
    h4,
    p,
    a,
    th,
    td,
    strong {
      color: variables.$font-color-left;
    }

    code {
      background-color: variables.$background-color-left-first;
    }

    pre {
      background-color: variables.$background-color-left-second;
      box-shadow: 2px 3px 5px 0 variables.$drop-shadow-color;

      .hljs {
        background-color: variables.$background-color-left-second;
      }
    }

    a {
      text-decoration-line: underline;
      text-decoration-thickness: 0.5px; // This is fun, isn't it
      &:hover {
        color: variables.$orange-color;
      }
    }
  }

  .nav {
    align-items: center;
    display: flex;
    padding: 0 0 1rem;

    .navigation-component {
      padding-right: 1rem;
    }

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
