<template>
  <div class="logo-component">
    <div class="logo-container">
      <figure class="image desktop is-3by1">
        <img
          src="../../../static/images/logo-full.svg"
          alt="freelance software developer"
          title="maerteijn"
        />
      </figure>
      <figure class="image mobile">
        <img
          src="../../../static/images/logo-small.svg"
          alt="freelance software developer"
          title="maerteijn"
        />
      </figure>
      <div class="icons" v-if="links">
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
  </div>
</template>

<script>
import { getIcon } from "../icons"
import SwitchLayout from "../components/switch-layout"

export default {
  name: "logo",
  computed: {
    links() {
      return this.$state.loaded ? this.$state.structure.logo_links : []
    },
  },
  methods: {
    icon: getIcon,
  },
}
</script>

<style lang="scss">
.logo-component {
  .logo-container {
    max-width: 20rem;

    figure.mobile {
      display: none;
    }

    .icons {
      display: flex;
      font-size: 2rem;

      .item {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
    }
  }
}

@media screen and (max-width: bulma.$tablet),
  screen and (max-height: variables.$site-min-height) {
  .logo-component {
    .logo-container {
      align-items: center;
      display: flex;

      figure.mobile {
        display: block;
        width: 2.25rem;
      }

      figure.desktop {
        display: none;
      }

      .icons {
        display: none;
      }
    }
  }
}
</style>
