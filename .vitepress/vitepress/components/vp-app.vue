<script setup lang="ts">
import { onMounted } from 'vue'
import nprogress from 'nprogress'
import VPNavbar from './vp-navbar.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'

onMounted(async () => {
  window.addEventListener(
    'click',
    (e) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return

      const { protocol, hostname, pathname, target } = link
      const currentUrl = window.location
      const extMatch = pathname.match(/\.\w+$/)
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== '.html')
      ) {
        e.preventDefault()
        if (pathname !== currentUrl.pathname) {
          nprogress.start()
        }
      }
    },
    { capture: true }
  )
})
</script>

<template>
  <div class="App">
    <VPNavbar />
    <VPSidebar>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent>
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
    </VPContent>
    <Debug />
  </div>
</template>
