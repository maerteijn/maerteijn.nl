<template>
  <main class="basic-layout">
    <div class="nav">
      <div class="logo">
        <figure class="image logo">
          <img
            src="../../../static/images/logo-small.svg"
            alt="freelance software developer"
            title="maerteijn"
          />
        </figure>
      </div>
      <navigation></navigation>
      <div class="icons">
        <switch-layout></switch-layout>
        <switch-language></switch-language>
      </div>
    </div>
    <slot name="default"></slot>
  </main>
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
      margin-right: 1rem;
      width: 3rem;
    }
  }

  .content {
    * {
      color: variables.$font-color-left;
    }

    code {
      color: variables.$orange-color;
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

      &:hover {
        color: variables.$orange-color;
      }
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

@media screen and (max-width: variables.$mobile) {
  .basic-layout {
    .logo {
      figure.logo {
        width: 2.2rem;
      }
    }
  }
}
</style>
