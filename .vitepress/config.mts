import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'

export default {
  title: 'Element Plus',
  description: 'a Vue 3 based component library for designers and developers',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/element-plus-logo-small.svg',
        type: 'image/svg+xm',
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#409eff',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml',
      },
    ],
  ],
  themeConfig: {
    sidebars,
    nav,
    agolia: {
      apiKey: '377f2b647a96d9b1d62e4780f2344da2',
      appId: 'BH4D9OD16A',
    },
  },
  lang: 'zh-CN',
  markdown: {
    config: (md) => mdPlugin(md),
  },
} as UserConfig
