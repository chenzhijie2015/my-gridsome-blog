// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import util from './utils/util'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.prototype.$util = util

  Vue.use(ElementUI)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
