<template>
  <div class="logo-component">
    <div class="logo-container-desktop">
      <figure class="image is-3by1">
        <img
          src="../../../static/images/logo-full.svg"
          alt="freelance software developer"
          title="maerteijn"
        />
      </figure>

      <div class="icons">
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
</template>

<script>
import icons from "../icons"

export default {
  name: "logo",
  computed: {
    site_info() {
      return this.$state.structure.site_info
    },
    links() {
      return this.$state.structure.logo_links
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
.logo-component {
  .logo-container-mobile {
    display: none;
  }

  .logo-container-desktop {
    margin-top: 8rem;
    max-width: 20rem;

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

@media screen and (max-width: bulma.$tablet) {
  .logo-component {
    .logo-container-mobile {
      display: block;
      max-width: 2.75rem;
      min-width: 2.75rem;
    }

    .logo-container-desktop {
      display: none;
    }
  }
}
</style>
