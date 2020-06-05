export default {
  name: 'Toggle',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: 'value'
    }
  },
  data () {
    return {
      check: this.checked || false
    }
  }
}
