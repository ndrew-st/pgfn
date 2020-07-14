export default {
  props: {
    to: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: 'most'
    }
  },
  computed: {
    classLink () {
      return `oc-link-${this.name}`
    }
  }
}
