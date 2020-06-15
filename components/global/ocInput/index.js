import throttle from '~/utils/throttle'
import isArray from '~/utils/isArray'

export default {
  inheritAttrs: false,
  props: {
    kind: {
      type: String,
      required: true,
      default: 'most'
    },
    addClass: {
      type: String,
      default: ''
    },
    measure: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: null
    },
    checkValue: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: null
    },
    addDesc: {
      type: String,
      default: null
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
      type: [String, Number, Array],
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
  data () {
    return {
      focused: false
    }
  },
  computed: {
    _isToggle () {
      return this.type === 'radio' || this.type === 'checkbox'
    },
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
          change (evt) {
            if (vm._isToggle) {
              if (vm.checkedInput) {
                vm.uncheck()
              } else {
                vm.check()
              }

              return false
            }

            vm.$emit('change', evt.target.value)
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
      return this._isToggle && this.checkValue && this.checkValue.length ? this.checkValue : Math.random()
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
    hidden () {
      return this._isToggle ? 'visually-hidden' : ''
    },
    checkedInput () {
      if (this.type === 'radio') {
        return this.value === this.checkValue
      } else if (this.type === 'checkbox') {
        return (this.value === null ? false : this.value.includes(this.checkValue))
      } else {
        return false
      }
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
    },
    check () {
      if (this.type === 'checkbox' && isArray(this.value)) {
        const value = this.value.slice(0) // Copy Array.

        value.push(this.checkValue)
        this.$emit('input', value)

        return
      }

      this.$emit('input', this.checkValue)
    },
    uncheck () {
      if (this.type === 'radio') { return }

      if (isArray(this.value)) {
        const value = this.value.slice(0)

        value.splice(value.indexOf(this.checkValue), 1)
        this.$emit('input', value)

        return
      }

      if (this.checkValue === true) {
        this.$emit('input', false)

        return
      }

      this.$emit('input', null)
    }
  }
}
