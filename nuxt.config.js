process.env.DEBUG = 'nuxt:*'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    base: [{ href: '/' }],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [{ src: 'https://kit.fontawesome.com/da5e54f6f7.js' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/aquamarine.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/global-components.js',
    '@/plugins/yandexMaps.js',
    '@/plugins/directives.js',
    '@/plugins/storage.js',
    '@/plugins/session.js',
    '@/plugins/bootstrap-vue.js',
    '@/plugins/api.js',
    '@/plugins/validate.js',
    { src: '@/plugins/metrika.js', mode: 'client' }
  ],
  router: {
    base: '/',
    prefetchLinks: false,
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'main',
          path: '/',
          component: resolve(__dirname, 'pages/direction/_city')
        },
        {
          name: 'request',
          path: '/request/:id',
          component: resolve(__dirname, 'pages/unit/_id')
        },
        {
          name: 'habitation',
          path: '/habitation/:id',
          component: resolve(__dirname, 'pages/unit/_id')
        }
      )
    }
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    stylus: 'assets/index.styl',
    scss: 'assets/*.scss'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://dev.personal.guide/api/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-yandex-maps'],
    extend (config, ctx) {
      config.resolve.extensions = [ '.vue', ...config.resolve.extensions ]
    }
  },
  env: {
    throttle_time: 1000,
    header_auth: 'authorization',
    ymaps_key: '886a66f0-7714-40d5-ac6a-2554184b1b65',
    dadata_key: '9b4233c7cb1251947bf36fea4a78d4d2b38fab03',
    token_key: {
      access: 'access_token',
      refresh: 'refresh_token'
    },
    api: {
      static_img_yandex: 'https://static-maps.yandex.ru/1.x/?',
      dadata: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
    }
  },
  debug: true
}
