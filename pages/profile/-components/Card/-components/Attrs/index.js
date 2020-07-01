import isArray from '~/utils/isArray'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Array],
      default: null
    }
  },
  inheritAttrs: false,
  computed: {
    isArray () {
      return isArray(this.content)
    }
  },
  methods: {
    isComma (index) {
      return index < this.content.length - 1
    }
  }
}
