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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/global-components.js',
    { src: '@/plugins/yandexMaps.js', ssr: false },
    { src: '@/plugins/directives.js', ssr: false },
    { src: '@/plugins/storage.js', mode: 'client' },
    '@/plugins/api.js'
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
        }
      )
    }
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
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
    stylus: 'assets/index.styl'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://dev.personal.guide/api/'
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
    token_key: {
      access: 'access_token',
      refresh: 'refresh_token'
    }
  },
  debug: true
}
