module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier/vue',
    'plugin:nuxt/recommended',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': [2,
      {
        'singleline': 1,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
  }
}
