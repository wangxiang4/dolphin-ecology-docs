<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'

const { theme, page } = useData()

const currentLink = computed(() => {
  return '/'
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="currentLink">
          <img
            class="logo"
            src="/images/dolphin-platform-logo.svg"
            alt="Dolphin Platform Logo"
          />
        </a>
      </div>
      <div class="content">
        <VPNavbarSearch class="search" :options="theme.agolia" multilang />
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarSocialLinks class="social-links" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  > a {
    height: 30px;
    width: 250px;
  }
  .logo {
    position: relative;
    height: 100%;
  }
}
</style>
