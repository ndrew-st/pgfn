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
    }
  },
  created () {
    if (process.client && this.$storage.getItem('sign-in')) {
      const { phone, stage } = this.$storage.getItem('sign-in')
      const res = this.$storage.getItem('stage')

      this.phone = phone
      this.stage = res || stage
    }
  },
  data: () => ({
    // stage: 'phone',
    stage: 'recovery',
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
        this._clearData()
      } else if (this.stage === 'pass') {
        this.stage = 'phone'
      }
    },
    _getNumPhone (str) {
      return str.replace(/\D/g, '')
    },
    async logIn (pass) {
      console.log('logIn ')
      console.log('stage ', this.stage)
      const phoneNum = this._getNumPhone(this.phone)

      const res = await this[login]({ phone: phoneNum, password: pass.password })

      if (res && res.error) {
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
          await this.logIn(par)
          break
        case 'recovery':
          await this.logIn(par)
          break
      }
    }
  }
}
