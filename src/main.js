// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'

import util from './utils/util'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.prototype.$util = util

  Vue.use(ElementUI)

  Vue.use(mavonEditor)

  Vue.prototype.$markdown = function (value) {
      return mavonEditor.markdownIt.render(value)
  }

  Vue.prototype.$setTitle = function (title) {
      if (title) {
          document.title = store.state.configuration.htmlTitle + " - " + title
      } else {
          document.title = store.state.configuration.htmlTitle
      }
  }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  appOptions.store = store
}
