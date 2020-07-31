import { mapActions, mapMutations } from 'vuex'

import { login } from '~/constants/actions/auth'

export default {
  layout: 'clean',
  watch: {
    stage (val) {
      this.$storage.setItem('sign-in', { phone: this.phone, stage: val })
    },
    phone (val) {
      this.$storage.setItem('sign-in', { phone: val, stage: this.stage })
    },
    pass (val) {
      if (this.error.length) {
        this.error = ''
      }
    }
  },
  created () {
    if (process.client && this.$storage.getItem('sign-in')) {
      const { phone, stage } = this.$storage.getItem('sign-in')
      const recovery = this.$storage.getItem('recovery')
      const res = this.$storage.getItem('stage')

      this.phone = phone
      this.code = (recovery && recovery.code) || ''
      this.stage = res || stage
    }
  },
  data: () => ({
    // stage: 'phone',
    stage: 'phone',
    code: '',
    error: '',
    phone: '',
    pass: '',
    attemptCounter: 0,
    picked: 0,
    timeCounter: 119
  }),
  methods: {
    ...mapMutations('popup', ['showPopup', 'closePopup']),
    _clearData () {
      this.showPopup('signUp')
      this.$storage.rmItem('sign-in')
    },
    prevent () {
      if (this.stage === 'phone') {
        this.showPopup('signUp')
        this.$storage.rmItem('sign-in')
      } else if (this.stage === 'pass') {
        this.stage = 'phone'
      } else if (this.stage === 'recovery') {
        this.stage = 'phone'
      }
    },
    _getNumPhone (str) {
      return str.replace(/\D/g, '')
    },
    async logIn () {
      const phoneNum = this._getNumPhone(this.phone)

      const res = await this[login]({ phone: phoneNum, password: this.pass })

      if (res && res.error) {
        this.error = 'Пароль не верен!'
        console.log('Error', res)

        return
      }

      this.closePopup('signIn')
      this.$router.push('/profile')

      this.$storage.rmItem('sign-in')
      this.$storage.rmItem('sign-up')
      this.$storage.rmItem('recovery')
    },
    ...mapActions('auth', [ login ]),
    async next (par) {
      switch (this.stage) {
        case 'phone':
          this.stage = 'pass'
          break
        case 'pass':
          await this.logIn()
          break
        case 'recovery':
          await this.logIn()
          break
      }
    }
  }
}
