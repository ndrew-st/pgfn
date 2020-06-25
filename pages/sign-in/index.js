import authHeader from '~/utils/authHeader'

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
      const result = await this.$api.users.login(phoneNum, pass)

      console.log('result ', result)

      if (!result.error) {
        this.$storage.setItem(process.env.token.access, result.tokens.accessToken)
        this.$storage.setItem(process.env.token.refresh, result.tokens.refreshToken)

        this.$axios.defaults.headers[process.env.header_auth] = authHeader(result.tokens.accessToken)
        this.$router.push('/profile')
      }
    },
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
