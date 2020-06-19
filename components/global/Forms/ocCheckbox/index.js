import isArray from '~/utils/isArray'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: ''
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
    check () {
      if (this.value && isArray(this.value)) {
        const value = this.value.slice(0) // Copy Array.

        value.push(this.checkValue)
        this.$emit('input', value)

        return
      }

      this.$emit('input', this.checkValue)
    },
    uncheck () {
      if (this.value && isArray(this.value)) {
        const value = this.value.slice(0)

        value.splice(value.indexOf(this.checkValue), 1)
        this.$emit('input', value)

        return
      }

      this.$emit('input', null)
    }
  }
}
