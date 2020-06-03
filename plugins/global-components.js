import Vue from 'vue'

const requireComponent = require.context(
  '~/components/global',
  true,
  /index.vue/
)

requireComponent.keys().forEach((fn) => {
  const arrFn = fn.split('/')

  if (arrFn.length > 3) {
    return false
  }

  const cmpConfig = requireComponent(fn)
  const cmpName = arrFn[1].charAt(0).toUpperCase() + arrFn[1].substr(1)

  Vue.component(cmpName, cmpConfig.default || cmpConfig)
})
