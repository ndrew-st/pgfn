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
    measure: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    required: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    listeners () {
      const vm = this

      return Object.assign({},
        this.$listeners,
        {
          input (evt) {
            if (vm.type === 'radio' || vm.type === 'checkbox') {
              return false
            }

            vm.throttledSearch(evt)
          },
          keydown (e) {
            if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
              e.preventDefault()

              return false
            }

            vm.$emit('keydown', e)
          },
          focusin () {
            vm.focused = true
            vm.$emit('focusin')
          },
          focusout () {
            vm.focused = false
            vm.$emit('focusout')
          }
        }
      )
    },
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
    throttledSearch: throttle(function (evt) {
      this.$emit('input', evt.target.value)
    }, process.env.throttle_time),
    clear () {
      if (this.rightIconName === 'clear') {
        this.$emit('input', '')
      }
    }
  }
}
