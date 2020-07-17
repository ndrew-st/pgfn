export default {
  watch: {
    stage (val) {
      this.$session.setItem('recovery', { stage: val, code: this.code })
    },
    code (val) {
      console.log('code ', val)

      this.$session.setItem('recovery', { stage: this.stage, code: this.code })
    }
  },
  data: () => ({
    stage: 'sms',
    picked: '',
    timeCounter: 119,
    error: '',
    phone: '',
    code: '',
    password: ''
  }),
  created () {
    if (process.client && this.$session.getItem('sign-in')) {
      const { phone } = this.$session.getItem('sign-in')
      const res = this.$session.getItem('recovery') || {}

      this.stage = res.stage || 'sms'
      this.code = res.code
      this.phone = phone
    }
  },
  methods: {
    prevent () {
      if (this.stage === 'sms') {
        this.$router.go(-1)
        // this._clearData()
      } else if (this.stage === 'pass') {
        this.stage = 'sms'
      }
    },
    async next (data) {
      if (data && data.password) {
        this.password = data.password
      }

      // if (this.stage === 'pass') {
      //   const res = this.$session.getItem('recovery')
      //   this.code = res.code
      // }

      const { stage, phone, code, password } = this

      debugger

      if (stage === 'pass') {
        if (!phone || !code || !password) {
          console.log('Error ')

          return
        }

        const res = await this.$api.users.resetPassword({ phone, code, password })

        if (res.error) {
          this.error = 'Неверный код'
        } else {
          this.$session.clearAll()
          this.$router.push('/')
        }
      }

      if (stage === 'sms') {
        this.stage = 'pass'
      }
    }
  }
}
