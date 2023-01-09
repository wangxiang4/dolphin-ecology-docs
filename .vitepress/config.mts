import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'

export default {
  base: "/dolphin-ecology-docs/",
  title: '海豚生态计划-海豚开发平台生态圈',
  description: '完全开源,面向开发者的海豚微服务开发平台',
  outDir: './docs',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/dolphin-platform-logo-small.svg',
        type: 'image/svg+xm',
      }
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
        content: '#409eff',
      },
    ]
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
