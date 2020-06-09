import external from './-components/External'
import internal from './-components/Internal'

export default {
  components: { internal, external },
  inheritAttrs: false,
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  data () {
    return {

    }
  },
  computed: {
    kind () {
      return this.href ? 'external' : 'internal'
    }
  }
}
