export default {
  props: {
    error: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    value: {
      type: String,
      required: null
    }
  },
  data: () => ({
    isActive: false,
    phone1: '',
    er: '',
    key: Math.random()
  }),
  mounted () {
    if (this.value) {
      this.phone1 = this.value.slice(1)
      this.key = Math.random()
      this.mask()
    }
  },
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
    async next (item) {
      if (!this.type) {
        return
      }

      const resCheck = this.$storage.getItem('checkCode')

      if (resCheck) {
        this.$emit('next', this.phone1)

        return
      }

      if (this.phone1.length === 13) {
        let res = null

        if (this.type === 'register') {
          res = await this.$api.users.checkPhoneRegister(this.phone1)
        } else if (this.type === 'login') {
          res = await this.$api.users.checkPhoneLogin(this.phone1)
        }

        if (!res.error) {
          this.$storage.setItem('checkCode', res)
          this.$emit('next', this.phone1)
        } else {
          const errRes = res.error.split(' ')[0]

          if (errRes === 'User') {
            this.er = 'Данный пользователь заблокирован!'
          } else {
            this.er = 'Номер не может быть использован'
          }
        }
      }
    }
  }
}
