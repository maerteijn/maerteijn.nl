<template>
  <main class="main">
    <div class="columns">
      <div class="column is-two-fifths left">left</div>
      <div class="column right"><slot name="default"></slot></div>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  display: grid;
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  .left {
    box-shadow: 0 0 5px 0 variables.$drop-shadow-color;
    z-index: 1;
  }

  .right {
    background-color: variables.$background-color;
    color: variables.$font-color;
    height: 100%;
    overflow: scroll;
  }
}

@media screen and (max-width: bulma.$tablet) {
  .main {
    .left {
      box-shadow: 0 0 15px 0 variables.$drop-shadow-color;
      position: relative;
    }
  }
}
</style>
