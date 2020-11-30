<template>
  <div id="root">
    <div id="wrapper">
      <nav
        class="navbar header has-shadow is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" :to="{ name: 'index' }">
            <img
              src="~assets/xt-icon-white.png"
              alt="Extraterrestrial Gardener"
              height="30"
            />
          </nuxt-link>

          <nuxt-link class="navbar-item" :to="{ name: 'index' }">
            <span class="has-text-light">Extraterrestrial Garden</span>
          </nuxt-link>

          <div class="navbar-burger" @click="burgerActive = !burgerActive">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div :class="burgerActive ? 'navbar-menu is-active' : 'navbar-menu'">
          <div class="navbar-start">
            <nuxt-link
              v-for="(item, key) of items"
              :key="key"
              class="navbar-item"
              :to="item.to"
              >{{ item.title }}</nuxt-link
            >
          </div>
          <div class="navbar-end"></div>
        </div>
      </nav>
      <nuxt />
    </div>
    <footer class="footer hero is-primary">
      <p class="has-text-centered">
        Made with &hearts; by David Knox &copy; 2020
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
$color1: #ccd9e2;
$color2: #285185;
$color3: #d67940;
$color4: #6f4849;
$primary: $color2;
$link: $color3;
#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#wrapper {
  flex: 1;
}
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>

<script>
export default {
  data() {
    return {
      burgerActive: false,
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'About',
          icon: 'lightbulb',
          to: { name: 'about' },
        },
        {
          title: 'Contact',
          icon: 'pencil',
          to: { name: 'contact' },
        },
      ],
    }
  },
}
</script>
