import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ca2fd8e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1e52d0a7 = () => interopDefault(import('../pages/nao-introduction.vue' /* webpackChunkName: "pages/nao-introduction" */))
const _6237fe3c = () => interopDefault(import('../pages/play_1.vue' /* webpackChunkName: "pages/play_1" */))
const _bbf41c4e = () => interopDefault(import('../pages/play_1_no_robot.vue' /* webpackChunkName: "pages/play_1_no_robot" */))
const _0d9795be = () => interopDefault(import('../pages/play_10.vue' /* webpackChunkName: "pages/play_10" */))
const _0da5ad3f = () => interopDefault(import('../pages/play_11.vue' /* webpackChunkName: "pages/play_11" */))
const _0db3c4c0 = () => interopDefault(import('../pages/play_12.vue' /* webpackChunkName: "pages/play_12" */))
const _0dc1dc41 = () => interopDefault(import('../pages/play_13.vue' /* webpackChunkName: "pages/play_13" */))
const _0dcff3c2 = () => interopDefault(import('../pages/play_14.vue' /* webpackChunkName: "pages/play_14" */))
const _0dde0b43 = () => interopDefault(import('../pages/play_15.vue' /* webpackChunkName: "pages/play_15" */))
const _0dec22c4 = () => interopDefault(import('../pages/play_16.vue' /* webpackChunkName: "pages/play_16" */))
const _0dfa3a45 = () => interopDefault(import('../pages/play_17.vue' /* webpackChunkName: "pages/play_17" */))
const _0e0851c6 = () => interopDefault(import('../pages/play_18.vue' /* webpackChunkName: "pages/play_18" */))
const _0e166947 = () => interopDefault(import('../pages/play_19.vue' /* webpackChunkName: "pages/play_19" */))
const _621bcf3a = () => interopDefault(import('../pages/play_2.vue' /* webpackChunkName: "pages/play_2" */))
const _f8388910 = () => interopDefault(import('../pages/play_2_no_robot.vue' /* webpackChunkName: "pages/play_2_no_robot" */))
const _0f4c6e5d = () => interopDefault(import('../pages/play_20.vue' /* webpackChunkName: "pages/play_20" */))
const _0f5a85de = () => interopDefault(import('../pages/play_21.vue' /* webpackChunkName: "pages/play_21" */))
const _0f689d5f = () => interopDefault(import('../pages/play_22.vue' /* webpackChunkName: "pages/play_22" */))
const _0f76b4e0 = () => interopDefault(import('../pages/play_23.vue' /* webpackChunkName: "pages/play_23" */))
const _0f84cc61 = () => interopDefault(import('../pages/play_24.vue' /* webpackChunkName: "pages/play_24" */))
const _0f92e3e2 = () => interopDefault(import('../pages/play_25.vue' /* webpackChunkName: "pages/play_25" */))
const _0fa0fb63 = () => interopDefault(import('../pages/play_26.vue' /* webpackChunkName: "pages/play_26" */))
const _0faf12e4 = () => interopDefault(import('../pages/play_27.vue' /* webpackChunkName: "pages/play_27" */))
const _0fbd2a65 = () => interopDefault(import('../pages/play_28.vue' /* webpackChunkName: "pages/play_28" */))
const _0fcb41e6 = () => interopDefault(import('../pages/play_29.vue' /* webpackChunkName: "pages/play_29" */))
const _61ffa038 = () => interopDefault(import('../pages/play_3.vue' /* webpackChunkName: "pages/play_3" */))
const _65c18517 = () => interopDefault(import('../pages/play_3_no_robot.vue' /* webpackChunkName: "pages/play_3_no_robot" */))
const _110146fc = () => interopDefault(import('../pages/play_30.vue' /* webpackChunkName: "pages/play_30" */))
const _110f5e7d = () => interopDefault(import('../pages/play_31.vue' /* webpackChunkName: "pages/play_31" */))
const _61e37136 = () => interopDefault(import('../pages/play_4.vue' /* webpackChunkName: "pages/play_4" */))
const _61c74234 = () => interopDefault(import('../pages/play_5.vue' /* webpackChunkName: "pages/play_5" */))
const _61ab1332 = () => interopDefault(import('../pages/play_6.vue' /* webpackChunkName: "pages/play_6" */))
const _618ee430 = () => interopDefault(import('../pages/play_7.vue' /* webpackChunkName: "pages/play_7" */))
const _6172b52e = () => interopDefault(import('../pages/play_8.vue' /* webpackChunkName: "pages/play_8" */))
const _6156862c = () => interopDefault(import('../pages/play_9.vue' /* webpackChunkName: "pages/play_9" */))
const _7b3ee2f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2ca2fd8e,
    name: "inspire"
  }, {
    path: "/nao-introduction",
    component: _1e52d0a7,
    name: "nao-introduction"
  }, {
    path: "/play_1",
    component: _6237fe3c,
    name: "play_1"
  }, {
    path: "/play_1_no_robot",
    component: _bbf41c4e,
    name: "play_1_no_robot"
  }, {
    path: "/play_10",
    component: _0d9795be,
    name: "play_10"
  }, {
    path: "/play_11",
    component: _0da5ad3f,
    name: "play_11"
  }, {
    path: "/play_12",
    component: _0db3c4c0,
    name: "play_12"
  }, {
    path: "/play_13",
    component: _0dc1dc41,
    name: "play_13"
  }, {
    path: "/play_14",
    component: _0dcff3c2,
    name: "play_14"
  }, {
    path: "/play_15",
    component: _0dde0b43,
    name: "play_15"
  }, {
    path: "/play_16",
    component: _0dec22c4,
    name: "play_16"
  }, {
    path: "/play_17",
    component: _0dfa3a45,
    name: "play_17"
  }, {
    path: "/play_18",
    component: _0e0851c6,
    name: "play_18"
  }, {
    path: "/play_19",
    component: _0e166947,
    name: "play_19"
  }, {
    path: "/play_2",
    component: _621bcf3a,
    name: "play_2"
  }, {
    path: "/play_2_no_robot",
    component: _f8388910,
    name: "play_2_no_robot"
  }, {
    path: "/play_20",
    component: _0f4c6e5d,
    name: "play_20"
  }, {
    path: "/play_21",
    component: _0f5a85de,
    name: "play_21"
  }, {
    path: "/play_22",
    component: _0f689d5f,
    name: "play_22"
  }, {
    path: "/play_23",
    component: _0f76b4e0,
    name: "play_23"
  }, {
    path: "/play_24",
    component: _0f84cc61,
    name: "play_24"
  }, {
    path: "/play_25",
    component: _0f92e3e2,
    name: "play_25"
  }, {
    path: "/play_26",
    component: _0fa0fb63,
    name: "play_26"
  }, {
    path: "/play_27",
    component: _0faf12e4,
    name: "play_27"
  }, {
    path: "/play_28",
    component: _0fbd2a65,
    name: "play_28"
  }, {
    path: "/play_29",
    component: _0fcb41e6,
    name: "play_29"
  }, {
    path: "/play_3",
    component: _61ffa038,
    name: "play_3"
  }, {
    path: "/play_3_no_robot",
    component: _65c18517,
    name: "play_3_no_robot"
  }, {
    path: "/play_30",
    component: _110146fc,
    name: "play_30"
  }, {
    path: "/play_31",
    component: _110f5e7d,
    name: "play_31"
  }, {
    path: "/play_4",
    component: _61e37136,
    name: "play_4"
  }, {
    path: "/play_5",
    component: _61c74234,
    name: "play_5"
  }, {
    path: "/play_6",
    component: _61ab1332,
    name: "play_6"
  }, {
    path: "/play_7",
    component: _618ee430,
    name: "play_7"
  }, {
    path: "/play_8",
    component: _6172b52e,
    name: "play_8"
  }, {
    path: "/play_9",
    component: _6156862c,
    name: "play_9"
  }, {
    path: "/",
    component: _7b3ee2f4,
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
