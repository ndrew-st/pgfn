import isArray from '~/utils/isArray'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    kind: {
      type: String,
      default: 'most'
    },
    value: {
      type: Array,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    checkValue: {
      type: [String, Array],
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  inheritAttrs: false,
  computed: {
    listeners () {
      const vm = this

      return Object.assign({},
        this.$listeners,
        {
          input () {
            if (vm.checkedInput) {
              vm.uncheck()
            } else {
              vm.check()
            }
          },
          change ({ target: { value } }) {
            vm.$emit('change', value)
          }
        }
      )
    },
    checkedInput () {
      if (!this.value) {
        return false
      } else if (typeof this.value === 'boolean') {
        return this.value
      } else if (isArray(this.value)) {
        return this.value.includes(this.checkValue)
      } else {
        return this.value === this.checkValue
      }
    },
    addClass () {
      return `oc-checkbox-${this.kind}`
    }
  },
  methods: {
    _isBool (val) {
      return typeof val === 'boolean'
    },
    _isString (val) {
      return typeof val === 'string'
    },
    check () {
      if (this.value === null) {
        return
      }

      if (this._isBool(this.value)) {
        this.$emit('input', true)

        return
      }

      if (this._isString(this.value) && this.value.length) {
        const res = []
        res.push(this.value, this.checkValue)

        this.$emit('input', res)

        return
      }

      if (isArray(this.value)) {
        const value = this.value.slice(0) // Copy Array.

        value.push(this.checkValue)
        this.$emit('input', value)

        return
      }

      this.$emit('input', this.checkValue)
    },
    uncheck () {
      if (this._isBool(this.value)) {
        this.$emit('input', false)

        return
      }

      if (isArray(this.value)) {
        const value = this.value.slice(0)

        value.splice(value.indexOf(this.checkValue), 1)
        this.$emit('input', value)

        return
      }

      this.$emit('input', null)
    }
  }
}
