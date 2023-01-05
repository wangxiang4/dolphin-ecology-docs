<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'
const { hasSidebar } = useSidebar()
</script>

<template>
  <header :class="{ navbar: true, 'has-sidebar': hasSidebar }">
    <VpNavbar/>
  </header>
</template>
