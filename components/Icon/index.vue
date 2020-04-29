<template>
  <span>
    <component
      :is="name"
      :active="active"
    />
  </span>
</template>

<script>
import find from './icons/find'
import heart from './icons/heart'
import bag from './icons/bag'
import add from './icons/add'
import user from './icons/user'

export default {
  components: { find, heart, bag, add, user },
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
      default: 'black'
    }
  },
  data () {
    return {
      colors: {
        white: 'white',
        black: 'black'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
