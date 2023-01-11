import { onUnmounted } from 'vue'
import type { CSSProperties } from 'vue'
import { isClient } from '@vueuse/core'

const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return ((str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
  });
};

const camelizeRE = /-(\w)/g;

const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

export const removeClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

export const hasClass = (el: Element, cls: string): boolean => {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('className should not contain space.')
  return el.classList.contains(cls)
}

export const getStyle = (
  element: HTMLElement,
  styleName: keyof CSSProperties
): string => {
  if (!isClient || !element || !styleName) return ''

  let key = camelize(styleName)
  if (key === 'float') key = 'cssFloat'
  try {
    const style = (element.style as any)[key]
    if (style) return style
    const computed: any = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  } catch {
    return (element.style as any)[key]
  }
}


let scrollBarWidth: number

export const getScrollBarWidth = (): number => {
  if (!isClient) return 0
  if (scrollBarWidth !== undefined) return scrollBarWidth

  const outer = document.createElement('div')
  // Cannot access 'propKey' before initialization
  // need to be dynamic namespace
  outer.className = 'el-scrollbar__wrap'
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode?.removeChild(outer)
  scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollBarWidth
}

export const classNameToArray = (cls = '') =>
  cls.split(' ').filter((item) => !!item.trim())

export const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

export const useLockScreen = () => {
  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0

  onUnmounted(() => {
    cleanup()
  })

  const cleanup = () => {
    if (!isClient) return
    removeClass(document.body, 'el-popup-parent--hidden')
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight
    }
  }

  const lock = () => {
    if (!isClient) return
    withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden')
    if (withoutHiddenClass) {
      bodyPaddingRight = document.body.style.paddingRight
      computedBodyPaddingRight = Number.parseInt(
        getStyle(document.body, 'paddingRight'),
        10
      )
    }
    scrollBarWidth = getScrollBarWidth()
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight
    const bodyOverflowY = getStyle(document.body, 'overflowY')
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === 'scroll') &&
      withoutHiddenClass
    ) {
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarWidth
      }px`
    }
    addClass(document.body, 'el-popup-parent--hidden')
  }

  return {
    lock,
    cleanup,
  }
}
