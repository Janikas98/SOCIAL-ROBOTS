import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62b5ce83 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _12b34352 = () => interopDefault(import('..\\pages\\nao-introduction.vue' /* webpackChunkName: "pages/nao-introduction" */))
const _2d2e8566 = () => interopDefault(import('..\\pages\\play_1.vue' /* webpackChunkName: "pages/play_1" */))
const _2d125664 = () => interopDefault(import('..\\pages\\play_2.vue' /* webpackChunkName: "pages/play_2" */))
const _2cd9f860 = () => interopDefault(import('..\\pages\\play_4.vue' /* webpackChunkName: "pages/play_4" */))
const _2cbdc95e = () => interopDefault(import('..\\pages\\play_5.vue' /* webpackChunkName: "pages/play_5" */))
const _ed25ce8a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _62b5ce83,
    name: "inspire"
  }, {
    path: "/nao-introduction",
    component: _12b34352,
    name: "nao-introduction"
  }, {
    path: "/play_1",
    component: _2d2e8566,
    name: "play_1"
  }, {
    path: "/play_2",
    component: _2d125664,
    name: "play_2"
  }, {
    path: "/play_4",
    component: _2cd9f860,
    name: "play_4"
  }, {
    path: "/play_5",
    component: _2cbdc95e,
    name: "play_5"
  }, {
    path: "/",
    component: _ed25ce8a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
