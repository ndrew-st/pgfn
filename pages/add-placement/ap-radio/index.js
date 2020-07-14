export default {
  // inheritAttrs: false,
  // model: {
  //   prop: 'checked',
  //   event: 'change'
  // },
  props: {
    label: {
      type: String,
      default: 'unknown'
    },
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      required: true
    }
  }
}
