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
    name: {
      type: String,
      default: 'default'
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    maxLength: {
      type: Number,
      default: 200
    },
    value: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  watch: {
    focus (val) {
      this.$emit('focus', val)
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    leftIcon () {
      return this.iconPosition === 'left'
    },
    rightIconName () {
      return this.value.length > 0 ? 'clear' : this.icon
    },
    rightIcon () {
      return this.iconPosition === 'right'
    },
    visibleIcon () {
      return this.icon !== null
    },
    additionalClass () {
      return this.visibleIcon ? this.leftIcon ? 'input-wrapper__content--left' : 'input-wrapper__content--right' : ''
    }
  },
  methods: {
    clear () {
      this.$emit('input', '')
    }
  }
}
