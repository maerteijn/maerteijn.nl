<template>
  <nav>
    <div class="nav-top">
      <div class="logo-container-desktop">
        <figure class="image is-3by1">
          <img
            src="../../../static/images/logo-full.svg"
            alt="freelance software developer"
            title="maerteijn"
          />
        </figure>

        <div class="navigation icons">
          <div class="item" v-for="item in links">
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
            src="../../../static/images/logo-small.svg"
            alt="freelance software developer"
            title="maerteijn"
          />
        </figure>
      </div>
    </div>

    <div class="nav-bottom">
      <input class="menu-button" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span v-html="icon('fas-bars')"></span
      ></label>

      <div class="navigation">
        <div class="item" v-for="item in navigation">
          <router-link
            v-bind:to="{ path: item.path }"
            v-html="item.name"
          ></router-link>
        </div>
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
      return this.$state.structure.logo_links
    },
    navigation() {
      return this.$state.structure.pages
    },
    site_info() {
      return this.$state.structure.site_info
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
    margin-top: 8rem;
    max-width: 20rem;

    .icons {
      font-size: 2rem;
    }
  }

  .menu-button {
    display: none;
  }

  .menu-icon {
    color: variables.$font-color-left;
    cursor: pointer;
    display: none;
    float: right;
  }

  .navigation {
    display: flex;
    margin-top: 2.5rem;
    max-width: 20rem;

    .item {
      align-items: center;
      display: flex;
      flex-direction: column;
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
      margin-top: 0;
      max-width: 100%;
    }
  }
}

@media screen and (max-width: variables.$mobile) {
  nav {
    .menu-icon {
      display: block;
      transform: rotate(0deg);
      transition: transform 0.25s;
    }

    .navigation {
      background-color: variables.$background-color-left-first;
      box-shadow: 0 5px 15px 0 variables.$drop-shadow-color;
      left: 0;
      max-height: 0;
      overflow: hidden;
      position: absolute;
      top: variables.$top-bar-size;
      transition: max-height 0.25s;
      width: 100%;

      .item {
        padding: 0.5rem 0;

        a {
          border: 0;

          &:hover {
            color: variables.$orange-color;
          }
        }
      }
    }

    .menu-button:checked ~ .navigation {
      max-height: 500px;
    }

    .menu-button:checked ~ .menu-icon {
      transform: rotate(90deg);
    }
  }
}
</style>
