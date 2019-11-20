export default {
  props: {
    type: {
      type: String,
      default: 'solid'
    },
    color: {
      type: String,
      default: 'grey'
    }
  },
  computed: {
    buttonClass () {
      return `oc-button oc-button_${this.type} color-${this.color}`
    }
  }
}
