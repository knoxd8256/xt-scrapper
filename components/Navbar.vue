<template>
  <nav
    class="navbar has-text-black top-nav"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand has-text-weight-bold is-size-3 custom-head">
      <nuxt-link class="navbar-item" :to="{ name: 'index' }">
        <img
          src="~assets/xt-icon-black.png"
          alt="Extraterrestrial Gardener"
          class="has-background-white custom-icon"
        />
      </nuxt-link>

      <nuxt-link class="navbar-item" :to="{ name: 'index' }">
        <span class="">Extraterrestrial Garden</span>
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
          class="navbar-item has-text-weight-semibold is-size-4 custom-head"
          :to="item.to"
          >{{ item.title }}</nuxt-link
        >
      </div>
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>
<style lang="scss">
@import '~assets/xt.scss';
nav.top-nav {
  background: url('~assets/medium-wood-plank.jpg');
  background-blend-mode: luminosity;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $cafe-au-lait;
}
.custom-head {
  text-shadow: white 0 0 2px;
}
.custom-icon {
  border-radius: 15%;
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
