export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    shape: {
      type: String,
      default: 'rect'
    },
    name: {
      type: String,
      default: 'most'
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'blue'
    },
    active: {
      type: Boolean,
      default: false
    },
    addClass: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  computed: {
    buttonClass () {
      return `oc-button oc-button-${this.name} shape-${this.shape} color-${this.color}`
    }
  }
}
