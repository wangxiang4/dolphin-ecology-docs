import type { Component } from 'vue'

import 'element-plus/theme-chalk/src/reset.scss'
import 'element-plus/theme-chalk/src/index.scss'
// for dark mode
import 'element-plus/theme-chalk/src/dark/css-vars.scss'

import VPApp from './components/vp-app.vue'

import './styles/css-vars.scss'
import './styles/app.scss'

export default VPApp

export { default as NotFound } from './components/vp-not-found.vue'
