import Vue from 'vue'

const requireComponent = require.context(
  '~/directives',
  false,
  /[a-z].js/
)

requireComponent.keys().forEach((fn) => {
  const cmpConfig = requireComponent(fn)
  const cmpName = fn.split('/').pop().replace(/\.\w+$/, '')

  Vue.directive(cmpName, cmpConfig.default)
})
