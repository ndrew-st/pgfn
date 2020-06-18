export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  computed: {
    classLink () {
      return `oc-link-${this.name}`
    }
  }
}
