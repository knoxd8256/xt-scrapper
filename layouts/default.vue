<template>
  <div id="root">
    <div id="wrapper">
      <Navbar> </Navbar>
      <nuxt />
    </div>
    <footer class="">
      <p class="has-text-centered has-text-light">
        Made with &hearts; by David Knox &copy; 2020
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '~assets/xt.scss';
#root {
  background-image: url('~assets/terrace-background.jpg');
  background-color: $eggshell;
  background-blend-mode: luminosity;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#wrapper {
  flex: 1;
}

footer {
  background: url('~assets/grass-banner.png');
  background-repeat: repeat-x;
  background-size: contain;
  padding-top: 1em;
  padding-bottom: 0.3em;
}

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
