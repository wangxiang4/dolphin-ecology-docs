import { computed } from 'vue'
import { useData } from 'vitepress'

export const useNav = () => {
  const { theme, lang } = useData()
  return computed(() => {
    return theme.value.nav[lang.value]
  })
}
