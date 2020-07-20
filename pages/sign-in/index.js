import { mapActions } from 'vuex'

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

      this.phone = phone
      this.stage = stage
    }
  },
  data: () => ({
    stage: 'phone',
    error: '',
    phone: '',
    pass: '',
    attemptCounter: 0,
    picked: 0,
    timeCounter: 119
  }),
  methods: {
    _clearData () {
      if (process.client) {
        this.$session.rmItem('sign-in')
      }
    },
    prevent () {
      if (this.stage === 'phone') {
        this.$router.go(-1)
        this._clearData()
      } else if (this.stage === 'pass') {
        this.stage = 'phone'
      }
    },
    _getNumPhone (str) {
      return str.replace(/\D/g, '')
    },
    async logIn (pass) {
      const phoneNum = this._getNumPhone(this.phone)

      try {
        await this[login]({ phone: phoneNum, password: pass.password })

        this.$router.push('/profile')
        this.$storage.clearAll()
      } catch (e) {
        console.log('Error ', e)
      }
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
      }
    }
  }
}
