export default {
  props: {
    title: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    measure: {
      type: String,
      default: null
    },
    labelFrom: {
      type: String,
      default: null
    },
    labelTo: {
      type: String,
      default: null
    }
  },
  watch: {
    from (val) {
      this.$emit('input', { from: val, to: this.to })
    },
    to (val) {
      this.$emit('input', { from: this.from, to: val })
    }
  },
  data () {
    return {
      from: '',
      to: ''
    }
  }
}
