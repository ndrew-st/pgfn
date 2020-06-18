export default {
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    checkValue: {
      type: String,
      default: null
    },
    kind: { // For styles
      type: String,
      default: 'most'
    },
    value: {
      type: String,
      default: ''
    },
    addDesc: { // additional description
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
            if (!vm.checkedInput) {
              vm.$emit('input', vm.checkValue)
            }
          }
        }
      )
    },
    checkedInput () {
      return this.value === this.checkValue
    },
    addClass () {
      return `oc-radio-${this.kind}`
    }
  }
}
