import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '886a66f0-7714-40d5-ac6a-2554184b1b65',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

// Используем плагин только в браузере, на сервере он не работает
if (process.browser) {
  Vue.use(YmapPlugin, settings)
}
