import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'

export default {
  base: "/",
  title: '海豚生态计划-海豚开发平台生态圈',
  description: '完全免费开源,包括高级功能,打造一个web端,安卓端,ios端的一个海豚架构平台生态圈',
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
      apiKey: '01ac5b2a54f0f72478b584dacf8acc29',
      appId: 'EGEB2XPPPP',
    },
  },
  lang: 'zh-CN',
  markdown: {
    config: (md) => mdPlugin(md),
  },
} as UserConfig
