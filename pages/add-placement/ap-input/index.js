export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      locValue: this.value
    }
  },
  watch: {
    value (val) {
      this.locValue = val
    }
  },
  methods: {
    input (ev) {
      this.locValue = ev.target.value
      this.$emit('input', ev.target.value)
    }
  }
}
