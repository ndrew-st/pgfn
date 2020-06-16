import Vue from 'vue'

import ocPhoneNumber from '~/components/ocPhoneNumber'
import ocPass from '~/components/ocPass'
import ocSms from '~/components/ocSms'

Vue.component('OcPhoneNumber', ocPhoneNumber)
Vue.component('OcPass', ocPass)
Vue.component('OcSms', ocSms)

const requireComponent = require.context(
  '~/components/global',
  true,
  /index.vue/
)

requireComponent.keys().forEach((fn) => {
  const arrFn = fn.split('/')
  const regCmp = /oc[A-Z]\w+/
  const regIdx = /index.vue/

  const idx = arrFn.findIndex(item => regCmp.test(item))

  if (!regCmp.test(arrFn[idx]) || !regIdx.test(arrFn[idx + 1])) {
    return
  }

  const arrName = arrFn.filter((item) => {
    if (regCmp.test(item)) {
      return item
    }
  })

  if (!arrName.length) {
    return
  }

  const name = arrName[0]

  const cmpConfig = requireComponent(fn)
  const cmpName = name.charAt(0).toUpperCase() + name.substr(1)

  Vue.component(cmpName, cmpConfig.default || cmpConfig)
})
