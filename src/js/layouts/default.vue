<template>
  <main class="main">
    <div class="left area">
      <nav>
        <div class="nav-top">
          <logo></logo>
        </div>
        <div class="nav-bottom">
          <navigation></navigation>
        </div>
      </nav>
    </div>
    <div class="right area"><slot name="default"></slot></div>
  </main>
</template>

<script>
import Logo from "../components/logo"
import Navigation from "../components/navigation"

export default {
  name: "layout-default",
  components: {
    logo: Logo,
    navigation: Navigation,
  },
}
</script>

<style lang="scss">
nav {
  display: flex;
  flex-direction: column;
  height: 100%;

  .nav-top {
    flex-grow: 1;
  }
}

.main {
  box-shadow: 0 5px 5px 0 variables.$drop-shadow-color;
  display: grid;
  grid-template-areas: "navigation main";
  grid-template-columns: 40% 1fr;
  height: 100vh;
  margin: 0 auto;
  max-height: variables.$site-max-height;
  max-width: bulma.$widescreen;
  overflow: hidden;

  .area {
    padding: 2rem;
  }

  .left {
    background-color: variables.$background-color-left-first;
    border-right: solid 1px variables.$orange-color;
    box-shadow: 0 5px 15px 0 variables.$drop-shadow-color;
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
    overflow: scroll;
  }
}

@media screen and (max-width: bulma.$tablet) {
  nav {
    align-items: center;
    flex-direction: row;

    .nav-bottom {
      flex-grow: 2;
    }
  }

  .main {
    grid-template-areas:
      "navigation"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: variables.$top-bar-size 1fr;

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
