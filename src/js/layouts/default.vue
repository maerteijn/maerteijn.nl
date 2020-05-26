<template>
  <main class="default-layout">
    <div class="left area">
      <nav>
        <div class="nav-top">
          <logo></logo>
        </div>
        <div class="nav-bottom">
          <navigation></navigation>
          <switch-layout></switch-layout>
          <switch-language></switch-language>
        </div>
      </nav>
    </div>
    <div class="right area">
      <slot name="default"></slot>
    </div>
  </main>
</template>

<script>
import Logo from "../components/logo"
import Navigation from "../components/navigation"
import SwitchLayout from "../components/switch-layout"
import SwitchLanguage from "../components/switch-language"

export default {
  name: "layout-default",
  components: {
    logo: Logo,
    navigation: Navigation,
    "switch-layout": SwitchLayout,
    "switch-language": SwitchLanguage,
  },
}
</script>

<style lang="scss">
.default-layout {
  box-shadow: 0 5px 5px 0 variables.$drop-shadow-color;
  display: grid;
  grid-template-areas: "navigation main";
  grid-template-columns: minmax(375px, 40%) auto;
  height: 100vh;
  margin: 0 auto;
  max-height: variables.$site-max-height;
  max-width: bulma.$widescreen;
  overflow: hidden;

  .icon {
    padding: 0 0.5rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    height: 100%;

    .navigation {
      .item {
        padding-right: 0.5rem;
      }
    }

    .nav-top {
      flex-grow: 1;

      .logo-component {
        margin-top: 5rem;
      }
    }

    .nav-bottom {
      display: flex;

      .navigation-component {
        flex-grow: 1;
      }
    }
  }

  .area {
    padding: 2rem;
  }

  .left {
    background-color: variables.$background-color-left-first;
    border-right: solid 1px variables.$orange-color;
    box-shadow: 0 5px 15px 0 variables.$drop-shadow-color;
    color: variables.$font-color-left;
    grid-area: navigation;
    z-index: 1;

    a {
      border-bottom: solid 1px rgba(0, 0, 0, 0);
      color: variables.$font-color-left;

      &:hover {
        border-bottom: solid 1px variables.$font-color-left;
        color: variables.$font-color-left;
      }
    }
  }

  .right {
    background-color: variables.$background-color-right;
    color: variables.$font-color-right;
    grid-area: main;
    overflow-y: auto;
  }
}

@media screen and (max-width: bulma.$tablet),
  screen and (max-height: variables.$site-min-height) {
  .default-layout {
    grid-template-areas:
      "navigation"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: variables.$top-bar-size 1fr;

    nav {
      align-items: center;
      flex-direction: row;

      .nav-top {
        .logo-component {
          margin-top: 0;
        }
      }

      .nav-bottom {
        flex-grow: 1;
        max-width: 100%;

        .switch-layout {
          padding-left: 1rem;
        }
      }
    }

    .area {
      padding: 0 1rem;
    }

    .left {
      border-bottom: solid 1px variables.$orange-color;
      border-right: 0;
      box-shadow: 0 -2px 15px 0 variables.$drop-shadow-color;
      position: relative;
    }

    .right {
      padding: 1rem;
    }
  }
}
</style>
