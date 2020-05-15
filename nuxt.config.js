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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
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
    '@/plugins/yandexMaps.js',
    '@/plugins/api.js'
  ],
  router: {
    base: '/',
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'main',
          path: '/',
          component: resolve(__dirname, 'pages/direction/_name')
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
    stylus: [
      'assets/global-varibles.styl',
      'assets/common.styl',
      'assets/mixins.styl'
    ]
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
    throttle_time: 1000
  }
}
