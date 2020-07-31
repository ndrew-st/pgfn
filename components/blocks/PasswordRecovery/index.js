import { mapMutations } from 'vuex'

export default {
  watch: {
    stage (val) {
      this.$storage.setItem('recovery', { stage: val, code: this.code })
    },
    code (val) {
      this.$storage.setItem('recovery', { stage: this.stage, code: this.code })
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
    if (process.client && this.$storage.getItem('sign-in')) {
      const { phone } = this.$storage.getItem('sign-in')
      const res = this.$storage.getItem('recovery') || {}

      if (res.code && res.code.length) {
        this.stage = 'pass'
      } else {
        this.stage = res.stage || 'sms'
      }

      this.code = res.code
      this.phone = phone
    }
  },
  methods: {
    ...mapMutations('popup', ['showPopup', 'closePopup']),
    prevent () {
      if (this.stage === 'sms') {
        this.showPopup('signIn')
        // this.$router.push('/sign-in')
        // this._clearData()
      } else if (this.stage === 'pass') {
        const { code } = this.$storage.getItem('recovery')
        if (code && code.length) {
          this.showPopup('signIn')
        } else {
          this.stage = 'sms'
        }
      } else if (this.stage === 'success') {
        this.stage = 'pass'
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

      if (stage === 'pass') {
        if (!phone || !code || !password) {
          console.log('Error ')

          return
        }

        const res = await this.$api.users.resetPassword({
          phone: phone.replace(/-/g, '').replace(/ /g, ''),
          code,
          password
        })

        console.log('res ', res)

        if (res.error) {
          this.error = 'Неверный код'
        } else {
          this.$storage.rmItem('recovery')
          this.$storage.setItem('stage', 'recovery')
          this.showPopup('signIn')
        }
      }

      if (stage === 'sms') {
        this.stage = 'pass'
      }
    }
  }
}
