import { mapActions } from 'vuex'

import { login } from '~/constants/actions/auth'

export default {
  layout: 'clean',
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
    _getNumPhone (str) {
      return str.replace(/\D/g, '')
    },
    async logIn (pass) {
      const phoneNum = this._getNumPhone(this.phone)

      try {
        await this[login]({ phone: phoneNum, password: pass })

        console.log('Here')

        this.$router.push('/profile')
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
