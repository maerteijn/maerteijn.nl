<template>
  <div class="logo-component">
    <div class="logo-container" v-if="mode == 'full'">
      <figure class="image desktop is-3by1">
        <img
          src="../../assets/images/logo-full.svg"
          alt="freelance software developer"
          title="maerteijn"
          width="320"
          height="107"
          v-on:click="goHome()"
        />
      </figure>
      <figure class="image mobile">
        <img
          src="../../assets/images/logo-small.svg"
          alt="freelance software developer"
          title="maerteijn"
          width="40"
          height="18"
          v-on:click="goHome()"
        />
      </figure>
      <div class="icons" v-if="links">
        <div class="item" v-for="item in links" v-bind:key="item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            v-bind:href="item.url"
            v-bind:title="item.title"
            v-html="icon(item.font_awesome_icon)"
          ></a>
        </div>
      </div>
    </div>
    <div class="logo" v-if="mode == 'small'">
      <figure class="image logo">
        <img
          src="../../assets/images/logo-small.svg"
          alt="freelance software developer"
          title="maerteijn"
          v-on:click="goHome()"
        />
      </figure>
    </div>
  </div>
</template>

<script>
import { getIcon } from "../icons"

export default {
  name: "logo",
  props: {
    mode: {
      type: String,
      default: "full",
      validator: function (value) {
        return ["full", "small"].includes(value)
      },
    },
  },
  computed: {
    links() {
      return this.$state.loaded ? this.$state.site.logo_links : []
    },
  },
  methods: {
    icon: getIcon,
    goHome() {
      this.$router.push("/")
    },
  },
}
</script>

<style lang="scss">
.logo-component {
  .logo-container {
    max-width: 20rem;
    margin: auto;

    figure.mobile,
    figure.desktop {
      cursor: pointer;
    }

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

@media screen and (max-width: bulma.$desktop),
  screen and (max-height: variables.$site-min-height) {
  .logo-component {
    .logo-container {
      align-items: center;
      display: flex;

      figure.mobile {
        display: block;
        width: 2.5rem;
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
