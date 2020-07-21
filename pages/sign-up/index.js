import UserPass from './user-pass/index.vue'

export default {
  layout: 'clean',
  components: {
    UserPass
  },
  watch: {
    phone (val) {
      this.$storage.setItem('sign-up', { phone: val, code: this.code, stage: this.stage })
    },
    stage (val) {
      this.$storage.setItem('sign-up', { phone: this.phone, code: this.code, stage: val })
    },
    code () {
      this.$storage.setItem('sign-up', { phone: this.phone, code: this.code, stage: this.stage })
    }
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
  created () {
    if (process.client && this.$storage.getItem('sign-up')) {
      const { phone, stage } = this.$storage.getItem('sign-up')

      this.phone = phone
      this.stage = stage
    }
  },
  methods: {
    clear () {
      this.$storage.rmItem('sign-up')
    },
    prevent () {
      if (this.stage === 'phone') {
        this.$router.go(-1)
        this._clearData()
      } else if (this.stage === 'sms') {
        this.stage = 'phone'
        this.error = ''
      } else if (this.stage === 'userpass') {
        const { code } = this.$storage.getItem('sign-up')

        if (code && code.length) {
          this.stage = 'phone'
        } else {
          this.stage = 'sms'
        }

        this.error = ''
      }
    },
    async oneMore () {
      if (!this.phone.length) {
        return
      }

      this.phone = this._getNumPhone(this.phone)
      const res = await this.$api.users.getCode(this.phone)

      if (res && !res.error) {
        this.timeCounter = res.expireAt
        this.error = ''
      } else {
        this.setError('phone')
      }
    },
    _getNumPhone (str) {
      return str.replace(/\D/g, '')
    },
    setError (error) {
      switch (error) {
        case 'You only recently sent SMS!':
          this.stage = 'sms'
          // this.error = 'Код был уже отправлен'
          break
        case 'phone':
          this.error = 'Номер не может быть использован'
          break
        case 'Code is out of date!':
          this.error = 'Данный код устарел. Пожалуйста, получите новый код в смс'
          break
        case 'old-code':
          this.error = 'Код устарел!'
          break
        case 'Request failed with status code 403':
          this.error = 'Неверный код!'
          break
      }
    },
    async register ({ name, password }) {
      const result = await this.$api.users.register(this.phone, name, password)

      if (!result.error) {
        this.$router.push('/sign-in')
        this.$storage.rmItem('sign-up')
        this.$storage.rmItem('sign-in')
        this.$storage.rmItem('recovery')
      } else {
        this.error = 'Ошибка регистрации! Обратитесь к администратору.'
      }
    },
    async next (par) {
      switch (this.stage) {
        case 'phone':

          const { code } = this.$storage.getItem('sign-up')
          this.code = code

          if (code.length) {
            this.stage = 'userpass'

            return
          }

          this.phone = this._getNumPhone(this.phone)
          const res = await this.$api.users.getCode(this.phone)

          if (res && !res.error) {
            this.stage = 'sms'
            this.timeCounter = res.expireAt
            this.error = ''
          } else {
            this.setError('phone')
          }

          break
        case 'sms':
          const result = await this.$api.users.checkCode(this.phone, this.code)

          if (result && !result.error) {
            this.stage = 'userpass'
            this.error = ''
          } else {
            this.setError('Request failed with status code 403')
          }

          break
      }
    }
  }
}
