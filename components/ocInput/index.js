export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    leftIcon () {
      return this.iconPosition === 'left'
    },
    rightIcon () {
      return this.iconPosition === 'right'
    },
    visibleIcon () {
      return this.icon !== null
    },
    additionalClass () {
      return this.visibleIcon ? this.leftIcon ? 'input-wrapper__left-padding' : 'icon-wrapper__right-padding' : ''
    }
  }
}
