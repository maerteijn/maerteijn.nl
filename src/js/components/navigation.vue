<template>
  <nav>
    <div class="nav-top">
      <div class="logo-container-desktop">
        <figure class="image is-3by1">
          <img
            src="../../../static/logo-full.svg"
            alt="freelance software developer"
            title="maerteijn"
          />
        </figure>

        <div class="level icons">
          <div class="level-item" v-for="item in links">
            <a
              target="_blank"
              v-bind:href="item.url"
              v-bind:title="item.title"
              v-html="icon(item.font_awesome_icon)"
            ></a>
          </div>
        </div>
      </div>

      <div class="logo-container-mobile">
        <figure class="image is-1by1">
          <img
            src="../../../static/logo-small.svg"
            alt="freelance software developer"
            title="maerteijn"
          />
        </figure>
      </div>
    </div>

    <div class="nav-bottom">
      <div class="navigation">
        <div class="item"><a href="">home</a></div>
        <div class="item"><a href="">impression</a></div>
        <div class="item"><a href="">personal</a></div>
      </div>
    </div>
  </nav>
</template>

<script>
import icons from "../icons"

export default {
  name: "navigation",
  computed: {
    links() {
      return this.$state.content.logo_links
    },
    site_info() {
      return this.$state.content.site_info
    },
  },
  methods: {
    icon(name) {
      return icons[name]
    },
  },
}
</script>

<style lang="scss">
nav {
  display: flex;
  flex-direction: column;
  height: 100%;

  a {
    border-bottom: solid 1px rgba(0, 0, 0, 0);
    color: variables.$font-color-left;

    &:hover {
      border-bottom: solid 1px variables.$font-color-left;
      color: variables.$font-color-left;
    }
  }

  .nav-top {
    flex-grow: 1;
  }

  .logo-container-mobile {
    display: none;
  }

  .logo-container-desktop {
    margin-top: 9rem;
    max-width: 20rem;

    .icons {
      .level-item {
        font-size: 2rem;
      }
    }
  }

  .navigation {
    display: flex;
    max-width: 20rem;

    .item {
      flex-grow: 1;
    }
  }
}

@media screen and (max-width: bulma.$tablet) {
  nav {
    align-items: center;
    flex-direction: row;

    .nav-bottom {
      flex-grow: 2;
    }

    a {
      &:hover {
        border-bottom: 0;
      }
    }

    .logo-container-mobile {
      display: block;
      max-width: 2.75rem;
      min-width: 2.75rem;
    }

    .logo-container-desktop {
      display: none;
    }

    .navigation {
      max-width: 100%;
    }
  }
}
</style>
