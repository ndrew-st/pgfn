export default {
  name: 'Checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    responsive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      check: this.checked || false
    }
  }
}
