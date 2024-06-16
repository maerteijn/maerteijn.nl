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
  created() {
    window.addEventListener("resize", this.setHeightLayoutContainer)
  },
  mounted() {
    this.setHeightLayoutContainer()
  },
  unmounted() {
    window.removeEventListener("resize", this.setHeightLayoutContainer)
  },
  methods: {
    setHeightLayoutContainer() {
      // safari ios and 100vh is not doing what it should be doing
      const elem = document.querySelector("main.default-layout")
      const newHeight = window.innerHeight + "px"
      if (elem.style.height != newHeight) {
        elem.style.height = newHeight
      }
    },
  },
}
</script>

<style lang="scss">
.default-layout {
  background-color: variables.$background-color-right;
  box-shadow: 0 5px 5px 0 variables.$drop-shadow-color;
  display: grid;
  grid-template-areas: "navigation main";
  grid-template-columns: minmax(400px, 20%) auto;
  height: 100vh;
  margin: 0 auto;
  max-width: bulma.$fullhd;
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
    background-image: radial-gradient(
      farthest-corner at 30% 50%,
      variables.$background-color-left-first,
      variables.$background-color-left-second 100%
    );

    border-right: solid 1px variables.$orange-color;
    box-shadow: 0 5px 15px 0 variables.$drop-shadow-color;
    color: variables.$font-color-left;
    grid-area: navigation;

    a {
      border-bottom: solid 1px rgba(0, 0, 0, 0);
      color: variables.$font-color-left;
    }
  }

  .right {
    grid-area: main;
    overflow-y: auto;
    scroll-behavior: smooth;

    a {
      color: variables.$link-color-right;
      text-decoration-line: none;
      &:hover {
        color: variables.$orange-color;
      }
    }
  }
}

@media screen and (max-width: bulma.$desktop),
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

@media print {
  .default-layout {
    grid-template-columns: 0 auto;
  }
}

@media (hover: hover) {
  .default-layout {
    .left {
      a:hover {
        border-bottom: solid 1px variables.$font-color-left;
        color: variables.$font-color-left;
      }
    }
  }
}
</style>
