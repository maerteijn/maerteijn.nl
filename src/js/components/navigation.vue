<template>
  <div class="navigation-component">
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
</template>

<script>
import icons from "../icons"

export default {
  name: "navigation",
  computed: {
    navigation() {
      return this.$state.structure.pages
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
.navigation-component {
  .menu-button {
    display: none;
  }

  .menu-icon {
    color: variables.$font-color-left;
    cursor: pointer;
    display: none;
    float: right;

    &:hover {
      cursor: pointer;
    }
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
  .navigation-component {
    .navigation {
      margin-top: 0;
      max-width: 100%;
    }
  }
}

@media screen and (max-width: variables.$mobile) {
  .navigation-component {
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
