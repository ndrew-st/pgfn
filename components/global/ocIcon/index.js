export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  created () {
    const requireComponent = require.context(
      './icons/',
      false, // sub-folders
      /[a-z]\w+\.vue$/
    )

    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName)
      const componentName = fileName
        .split('/')
        .pop()
        .split('.')[0]
      this.$options.components[componentName] = componentConfig.default
    })
  }

}
