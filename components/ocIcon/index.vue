<template>
  <span>
    <component
      :is="name"
      :active="active"
      :color="color"
    />
  </span>
</template>

<script>
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
  data () {
    return {
      colors: {
        white: 'white',
        black: 'black'
      }
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
      // Gets the file name regardless of folder depth
      const componentName = fileName
        .split('/')
        .pop()
        .split('.')[0]
      // register the component locally
      this.$options.components[componentName] = componentConfig.default
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
