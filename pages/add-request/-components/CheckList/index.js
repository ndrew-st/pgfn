export default {
  props: {
    content: {
      type: Object,
      default: null
    },
    kind: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  watch: {
    current (val) {
      this.$emit('input', val)
    }
  },
  data () {
    return {
      current: []
    }
  },
  computed: {
    icon () {
      return this.type === 'checkbox' ? 'check' : 'circle-radio'
    }
  }
}
