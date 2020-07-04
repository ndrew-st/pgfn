export default {
  name: 'BlockCheckboxes',
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    more: {
      type: Boolean,
      default: false
    },
    checkboxes: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  }
}
