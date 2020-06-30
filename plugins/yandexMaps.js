import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: process.env.ymaps_key,
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

// Используем плагин только в браузере, на сервере он не работает
if (process.browser) {
  Vue.use(YmapPlugin, settings)
}

export default settings
