import throttle from '~/utils/throttle'

export default {
  inheritAttrs: false,
  props: {
    kind: {
      type: String,
      required: true,
      default: 'most'
    },
    label: {
      type: String,
      default: null
    },
    addDesc: {
      type: String,
      default: null
    },
    measure: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    maxLength: {
      type: Number,
      default: 200
    }
  },
  watch: {
    value (val) {
      this.text = val
    },
    text: throttle(function (val) {
      this.$emit('input', val)
    }, process.env.throttle_time)
  },
  data () {
    return {
      focused: false,
      text: ''
    }
  },
  created () {
    if (this.value) {
      this.text = this.value
    }
  },
  computed: {
    id () {
      return Math.random()
    },
    leftIcon () {
      return this.iconPosition === 'left'
    },
    rightIconName () {
      if (this.kind === 'search') {
        return this.value.length > 0 ? 'clear' : this.icon
      } else {
        return this.icon
      }
    },
    rightIcon () {
      return this.iconPosition === 'right'
    },
    visibleIcon () {
      return this.icon !== null
    },
    additionalClass () {
      return this.visibleIcon ? this.leftIcon ? 'input-left' : 'input-right' : ''
    },
    mainClass () {
      return `oc-input-${this.kind}`
    }
  },
  methods: {
    keydown (e) {
      if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault()

        return false
      }

      this.$emit('keydown', e)
    },
    focusin () {
      this.focused = true
      this.$emit('focusin')
    },
    focusout () {
      this.focused = false
      this.$emit('focusout')
    },
    clear () {
      if (this.rightIconName === 'clear') {
        this.text = ''
      }
    }
  }
}
