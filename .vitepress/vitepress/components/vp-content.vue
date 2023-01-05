<script setup lang="ts">
import { computed, onUpdated } from 'vue'
import nprogress from 'nprogress'
import { useData, useRoute } from 'vitepress'
import VPHeroContent from './vp-hero-content.vue'
import VPDocContent from './vp-doc-content.vue'
import VPNotFound from './vp-not-found.vue'

const { frontmatter } = useData()
const route = useRoute()
const isNotFound = computed(() => route.component === VPNotFound)
const isHeroPost = computed(() => frontmatter.value.page === true)

onUpdated(() => {
    nprogress.done()
})
</script>

<template>
  <main :class="{ 'page-content': true }">
    <VPNotFound v-if="isNotFound" />
    <VPHeroContent v-else-if="isHeroPost" />
    <VPDocContent v-else>
      <template #content-top><slot name="content-top" /></template>
      <template #content-bottom><slot name="content-bottom" /></template>
    </VPDocContent>
  </main>
</template>
