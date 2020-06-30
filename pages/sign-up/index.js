import UserPass from './user-pass/index.vue'

export default {
  layout: 'clean',
  components: {
    UserPass
  },
  data: () => ({
    stage: 'phone',
    error: '',
    phone: '',
    code: '',
    attemptCounter: 0,
    picked: 0,
    timeCounter: 119
  }),
  methods: {
    _getNumPhone (str) {
      return str.replace(/\D/g, '')
    },
    setError (error) {
      switch (error) {
        case 'You only recently sent SMS!':
          this.stage = 'sms'
          // this.error = 'Код был уже отправлен'
          break
        case 'Code is out of date!':
          this.error = 'Данный код устарел. Пожалуйста, получите новый код в смс'
          break
        case 'Phone number is incorrect!':
          // this.error = 'wrongNumber'
          this.error = 'Не верно введен номер телефона'
          break
      }
    },
    async register ({ name, password }) {
      const result = await this.$api.users.register(this.phone, name, password)
      console.log('register result ', result)

      if (!result.error) {
        this.$router.push('/sign-in')
      } else {
        this.error = result.error
      }
    },
    async next (par) {
      switch (this.stage) {
        case 'phone':

          this.phone = this._getNumPhone(this.phone)
          const res = await this.$api.users.getCode(this.phone)

          if (res && !res.error) {
            this.stage = 'sms'
            this.error = ''
          } else {
            this.setError(res.error)
          }

          break
        case 'sms':
          const result = await this.$api.users.checkCode(this.phone, this.code)
          console.log('checkCode ', result)

          if (result && !result.error) {
            this.stage = 'userpass'
            this.error = ''
          } else {
            this.setError(result.error)
          }

          break
      }
    }
  }
}
