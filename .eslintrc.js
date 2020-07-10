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
    'prettier/vue',
    'plugin:nuxt/recommended',
    '@nuxtjs',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': ["error" ,
      {
        'singleline': 1,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'warn',
    'vue/require-component-is': 'warn',
    'vue/no-unused-components': 'warn',
    'no-unused-vars': 'warn',
    'import/order': ['warn', {
      'pathGroups': [
        {
          'pattern': '~/**',
          'group': 'external'
        }
      ]
    }]
  }
}
