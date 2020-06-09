export default {
  props: {
    error: {
      type: String
    },
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isActive: false,
    phone1: ''
  }),
  methods: {
    mask () {
      const matrix = '___ ___-__-__'
      let i = 0
      const def = matrix.replace(/\D/g, '')
      let val = this.phone1.replace(/\D/g, '')
      if (def.length >= val.length) { val = def }
      this.phone1 = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      })
      if (this.phone1.length === 13) {
        this.isActive = true
      } else { this.isActive = false }

      this.$emit('input', `7${this.phone1}`)
    },
    next (item) {
      if (this.phone1.length === 13) {
        this.$emit('next', this.phone1)
      }
    }
  }
}
