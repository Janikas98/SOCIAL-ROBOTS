import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62b5ce83 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _12b34352 = () => interopDefault(import('..\\pages\\nao-introduction.vue' /* webpackChunkName: "pages/nao-introduction" */))
const _2d2e8566 = () => interopDefault(import('..\\pages\\play_1.vue' /* webpackChunkName: "pages/play_1" */))
const _25c6fdce = () => interopDefault(import('..\\pages\\play_1_no_robot.vue' /* webpackChunkName: "pages/play_1_no_robot" */))
const _43aa66b3 = () => interopDefault(import('..\\pages\\play_10.vue' /* webpackChunkName: "pages/play_10" */))
const _d4d2f1b0 = () => interopDefault(import('..\\pages\\play_10_no_robot.vue' /* webpackChunkName: "pages/play_10_no_robot" */))
const _43b87e34 = () => interopDefault(import('..\\pages\\play_11.vue' /* webpackChunkName: "pages/play_11" */))
const _777450c7 = () => interopDefault(import('..\\pages\\play_11_no_robot.vue' /* webpackChunkName: "pages/play_11_no_robot" */))
const _43c695b5 = () => interopDefault(import('..\\pages\\play_12.vue' /* webpackChunkName: "pages/play_12" */))
const _59521a66 = () => interopDefault(import('..\\pages\\play_12_no_robot.vue' /* webpackChunkName: "pages/play_12_no_robot" */))
const _43d4ad36 = () => interopDefault(import('..\\pages\\play_13.vue' /* webpackChunkName: "pages/play_13" */))
const _3b2fe405 = () => interopDefault(import('..\\pages\\play_13_no_robot.vue' /* webpackChunkName: "pages/play_13_no_robot" */))
const _43e2c4b7 = () => interopDefault(import('..\\pages\\play_14.vue' /* webpackChunkName: "pages/play_14" */))
const _1d0dada4 = () => interopDefault(import('..\\pages\\play_14_no_robot.vue' /* webpackChunkName: "pages/play_14_no_robot" */))
const _43f0dc38 = () => interopDefault(import('..\\pages\\play_15.vue' /* webpackChunkName: "pages/play_15" */))
const _0229117a = () => interopDefault(import('..\\pages\\play_15_no_robot.vue' /* webpackChunkName: "pages/play_15_no_robot" */))
const _43fef3b9 = () => interopDefault(import('..\\pages\\play_16.vue' /* webpackChunkName: "pages/play_16" */))
const _3e6d7e3c = () => interopDefault(import('..\\pages\\play_16_no_robot.vue' /* webpackChunkName: "pages/play_16_no_robot" */))
const _440d0b3a = () => interopDefault(import('..\\pages\\play_17.vue' /* webpackChunkName: "pages/play_17" */))
const _7ab1eafe = () => interopDefault(import('..\\pages\\play_17_no_robot.vue' /* webpackChunkName: "pages/play_17_no_robot" */))
const _441b22bb = () => interopDefault(import('..\\pages\\play_18.vue' /* webpackChunkName: "pages/play_18" */))
const _b6f657c0 = () => interopDefault(import('..\\pages\\play_18_no_robot.vue' /* webpackChunkName: "pages/play_18_no_robot" */))
const _44293a3c = () => interopDefault(import('..\\pages\\play_19.vue' /* webpackChunkName: "pages/play_19" */))
const _f33ac482 = () => interopDefault(import('..\\pages\\play_19_no_robot.vue' /* webpackChunkName: "pages/play_19_no_robot" */))
const _2d125664 = () => interopDefault(import('..\\pages\\play_2.vue' /* webpackChunkName: "pages/play_2" */))
const _07a4c76d = () => interopDefault(import('..\\pages\\play_2_no_robot.vue' /* webpackChunkName: "pages/play_2_no_robot" */))
const _455f3f52 = () => interopDefault(import('..\\pages\\play_20.vue' /* webpackChunkName: "pages/play_20" */))
const _211c1d2e = () => interopDefault(import('..\\pages\\play_20_no_robot.vue' /* webpackChunkName: "pages/play_20_no_robot" */))
const _456d56d3 = () => interopDefault(import('..\\pages\\play_21.vue' /* webpackChunkName: "pages/play_21" */))
const _5d6089f0 = () => interopDefault(import('..\\pages\\play_21_no_robot.vue' /* webpackChunkName: "pages/play_21_no_robot" */))
const _457b6e54 = () => interopDefault(import('..\\pages\\play_22.vue' /* webpackChunkName: "pages/play_22" */))
const _99a4f6b2 = () => interopDefault(import('..\\pages\\play_22_no_robot.vue' /* webpackChunkName: "pages/play_22_no_robot" */))
const _458985d5 = () => interopDefault(import('..\\pages\\play_23.vue' /* webpackChunkName: "pages/play_23" */))
const _d5e96374 = () => interopDefault(import('..\\pages\\play_23_no_robot.vue' /* webpackChunkName: "pages/play_23_no_robot" */))
const _45979d56 = () => interopDefault(import('..\\pages\\play_24.vue' /* webpackChunkName: "pages/play_24" */))
const _76e917e5 = () => interopDefault(import('..\\pages\\play_24_no_robot.vue' /* webpackChunkName: "pages/play_24_no_robot" */))
const _45a5b4d7 = () => interopDefault(import('..\\pages\\play_25.vue' /* webpackChunkName: "pages/play_25" */))
const _58c6e184 = () => interopDefault(import('..\\pages\\play_25_no_robot.vue' /* webpackChunkName: "pages/play_25_no_robot" */))
const _45b3cc58 = () => interopDefault(import('..\\pages\\play_26.vue' /* webpackChunkName: "pages/play_26" */))
const _3aa4ab23 = () => interopDefault(import('..\\pages\\play_26_no_robot.vue' /* webpackChunkName: "pages/play_26_no_robot" */))
const _45c1e3d9 = () => interopDefault(import('..\\pages\\play_27.vue' /* webpackChunkName: "pages/play_27" */))
const _1c8274c2 = () => interopDefault(import('..\\pages\\play_27_no_robot.vue' /* webpackChunkName: "pages/play_27_no_robot" */))
const _45cffb5a = () => interopDefault(import('..\\pages\\play_28.vue' /* webpackChunkName: "pages/play_28" */))
const _033f833e = () => interopDefault(import('..\\pages\\play_28_no_robot.vue' /* webpackChunkName: "pages/play_28_no_robot" */))
const _45de12db = () => interopDefault(import('..\\pages\\play_29.vue' /* webpackChunkName: "pages/play_29" */))
const _3f83f000 = () => interopDefault(import('..\\pages\\play_29_no_robot.vue' /* webpackChunkName: "pages/play_29_no_robot" */))
const _2cf62762 = () => interopDefault(import('..\\pages\\play_3.vue' /* webpackChunkName: "pages/play_3" */))
const _2cfadde8 = () => interopDefault(import('..\\pages\\play_3_no_robot.vue' /* webpackChunkName: "pages/play_3_no_robot" */))
const _471417f1 = () => interopDefault(import('..\\pages\\play_30.vue' /* webpackChunkName: "pages/play_30" */))
const _494d5baa = () => interopDefault(import('..\\pages\\play_30_no_robot.vue' /* webpackChunkName: "pages/play_30_no_robot" */))
const _47222f72 = () => interopDefault(import('..\\pages\\play_31.vue' /* webpackChunkName: "pages/play_31" */))
const _2b2b2549 = () => interopDefault(import('..\\pages\\play_31_no_robot.vue' /* webpackChunkName: "pages/play_31_no_robot" */))
const _2cd9f860 = () => interopDefault(import('..\\pages\\play_4.vue' /* webpackChunkName: "pages/play_4" */))
const _693f4aaa = () => interopDefault(import('..\\pages\\play_4_no_robot.vue' /* webpackChunkName: "pages/play_4_no_robot" */))
const _2cbdc95e = () => interopDefault(import('..\\pages\\play_5.vue' /* webpackChunkName: "pages/play_5" */))
const _a583b76c = () => interopDefault(import('..\\pages\\play_5_no_robot.vue' /* webpackChunkName: "pages/play_5_no_robot" */))
const _2ca19a5c = () => interopDefault(import('..\\pages\\play_6.vue' /* webpackChunkName: "pages/play_6" */))
const _e1c8242e = () => interopDefault(import('..\\pages\\play_6_no_robot.vue' /* webpackChunkName: "pages/play_6_no_robot" */))
const _2c856b5a = () => interopDefault(import('..\\pages\\play_7.vue' /* webpackChunkName: "pages/play_7" */))
const _70f9b788 = () => interopDefault(import('..\\pages\\play_7_no_robot.vue' /* webpackChunkName: "pages/play_7_no_robot" */))
const _2c693c58 = () => interopDefault(import('..\\pages\\play_8.vue' /* webpackChunkName: "pages/play_8" */))
const _52d78127 = () => interopDefault(import('..\\pages\\play_8_no_robot.vue' /* webpackChunkName: "pages/play_8_no_robot" */))
const _2c4d0d56 = () => interopDefault(import('..\\pages\\play_9.vue' /* webpackChunkName: "pages/play_9" */))
const _34b54ac6 = () => interopDefault(import('..\\pages\\play_9_no_robot.vue' /* webpackChunkName: "pages/play_9_no_robot" */))
const _6ce84da9 = () => interopDefault(import('..\\pages\\play_lose.vue' /* webpackChunkName: "pages/play_lose" */))
const _0d400a78 = () => interopDefault(import('..\\pages\\play_win.vue' /* webpackChunkName: "pages/play_win" */))
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
    path: "/play_1_no_robot",
    component: _25c6fdce,
    name: "play_1_no_robot"
  }, {
    path: "/play_10",
    component: _43aa66b3,
    name: "play_10"
  }, {
    path: "/play_10_no_robot",
    component: _d4d2f1b0,
    name: "play_10_no_robot"
  }, {
    path: "/play_11",
    component: _43b87e34,
    name: "play_11"
  }, {
    path: "/play_11_no_robot",
    component: _777450c7,
    name: "play_11_no_robot"
  }, {
    path: "/play_12",
    component: _43c695b5,
    name: "play_12"
  }, {
    path: "/play_12_no_robot",
    component: _59521a66,
    name: "play_12_no_robot"
  }, {
    path: "/play_13",
    component: _43d4ad36,
    name: "play_13"
  }, {
    path: "/play_13_no_robot",
    component: _3b2fe405,
    name: "play_13_no_robot"
  }, {
    path: "/play_14",
    component: _43e2c4b7,
    name: "play_14"
  }, {
    path: "/play_14_no_robot",
    component: _1d0dada4,
    name: "play_14_no_robot"
  }, {
    path: "/play_15",
    component: _43f0dc38,
    name: "play_15"
  }, {
    path: "/play_15_no_robot",
    component: _0229117a,
    name: "play_15_no_robot"
  }, {
    path: "/play_16",
    component: _43fef3b9,
    name: "play_16"
  }, {
    path: "/play_16_no_robot",
    component: _3e6d7e3c,
    name: "play_16_no_robot"
  }, {
    path: "/play_17",
    component: _440d0b3a,
    name: "play_17"
  }, {
    path: "/play_17_no_robot",
    component: _7ab1eafe,
    name: "play_17_no_robot"
  }, {
    path: "/play_18",
    component: _441b22bb,
    name: "play_18"
  }, {
    path: "/play_18_no_robot",
    component: _b6f657c0,
    name: "play_18_no_robot"
  }, {
    path: "/play_19",
    component: _44293a3c,
    name: "play_19"
  }, {
    path: "/play_19_no_robot",
    component: _f33ac482,
    name: "play_19_no_robot"
  }, {
    path: "/play_2",
    component: _2d125664,
    name: "play_2"
  }, {
    path: "/play_2_no_robot",
    component: _07a4c76d,
    name: "play_2_no_robot"
  }, {
    path: "/play_20",
    component: _455f3f52,
    name: "play_20"
  }, {
    path: "/play_20_no_robot",
    component: _211c1d2e,
    name: "play_20_no_robot"
  }, {
    path: "/play_21",
    component: _456d56d3,
    name: "play_21"
  }, {
    path: "/play_21_no_robot",
    component: _5d6089f0,
    name: "play_21_no_robot"
  }, {
    path: "/play_22",
    component: _457b6e54,
    name: "play_22"
  }, {
    path: "/play_22_no_robot",
    component: _99a4f6b2,
    name: "play_22_no_robot"
  }, {
    path: "/play_23",
    component: _458985d5,
    name: "play_23"
  }, {
    path: "/play_23_no_robot",
    component: _d5e96374,
    name: "play_23_no_robot"
  }, {
    path: "/play_24",
    component: _45979d56,
    name: "play_24"
  }, {
    path: "/play_24_no_robot",
    component: _76e917e5,
    name: "play_24_no_robot"
  }, {
    path: "/play_25",
    component: _45a5b4d7,
    name: "play_25"
  }, {
    path: "/play_25_no_robot",
    component: _58c6e184,
    name: "play_25_no_robot"
  }, {
    path: "/play_26",
    component: _45b3cc58,
    name: "play_26"
  }, {
    path: "/play_26_no_robot",
    component: _3aa4ab23,
    name: "play_26_no_robot"
  }, {
    path: "/play_27",
    component: _45c1e3d9,
    name: "play_27"
  }, {
    path: "/play_27_no_robot",
    component: _1c8274c2,
    name: "play_27_no_robot"
  }, {
    path: "/play_28",
    component: _45cffb5a,
    name: "play_28"
  }, {
    path: "/play_28_no_robot",
    component: _033f833e,
    name: "play_28_no_robot"
  }, {
    path: "/play_29",
    component: _45de12db,
    name: "play_29"
  }, {
    path: "/play_29_no_robot",
    component: _3f83f000,
    name: "play_29_no_robot"
  }, {
    path: "/play_3",
    component: _2cf62762,
    name: "play_3"
  }, {
    path: "/play_3_no_robot",
    component: _2cfadde8,
    name: "play_3_no_robot"
  }, {
    path: "/play_30",
    component: _471417f1,
    name: "play_30"
  }, {
    path: "/play_30_no_robot",
    component: _494d5baa,
    name: "play_30_no_robot"
  }, {
    path: "/play_31",
    component: _47222f72,
    name: "play_31"
  }, {
    path: "/play_31_no_robot",
    component: _2b2b2549,
    name: "play_31_no_robot"
  }, {
    path: "/play_4",
    component: _2cd9f860,
    name: "play_4"
  }, {
    path: "/play_4_no_robot",
    component: _693f4aaa,
    name: "play_4_no_robot"
  }, {
    path: "/play_5",
    component: _2cbdc95e,
    name: "play_5"
  }, {
    path: "/play_5_no_robot",
    component: _a583b76c,
    name: "play_5_no_robot"
  }, {
    path: "/play_6",
    component: _2ca19a5c,
    name: "play_6"
  }, {
    path: "/play_6_no_robot",
    component: _e1c8242e,
    name: "play_6_no_robot"
  }, {
    path: "/play_7",
    component: _2c856b5a,
    name: "play_7"
  }, {
    path: "/play_7_no_robot",
    component: _70f9b788,
    name: "play_7_no_robot"
  }, {
    path: "/play_8",
    component: _2c693c58,
    name: "play_8"
  }, {
    path: "/play_8_no_robot",
    component: _52d78127,
    name: "play_8_no_robot"
  }, {
    path: "/play_9",
    component: _2c4d0d56,
    name: "play_9"
  }, {
    path: "/play_9_no_robot",
    component: _34b54ac6,
    name: "play_9_no_robot"
  }, {
    path: "/play_lose",
    component: _6ce84da9,
    name: "play_lose"
  }, {
    path: "/play_win",
    component: _0d400a78,
    name: "play_win"
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
