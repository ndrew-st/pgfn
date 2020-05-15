import OcVerification from '@/components/ocVerification/index.vue'
import { serverRequest } from '@/api/out.js'
import OcPhoneNumber from '@/components/ocPhoneNumber/index.vue'
import OcSmsCode from '@/components/ocSmsCode/index.vue'
import UserPass from './user-pass/index.vue'

export default {
  layout: 'clean',
  components: {
    OcVerification,
    OcPhoneNumber,
    OcSmsCode,
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
      if (!result.error) {
        this.$router.push('/sign-in')
      } else {
        this.error = result.error
      }
    },
    async next (par) {
      switch (this.stage) {
        case 'phone':

          const reply = await this.$api.users.getCode(this.phone)
          console.log(reply)
          if (reply.success) {
            this.stage = 'sms'
            this.error = ''
          } else {
            this.setError(reply.error.error)
          }

          break
        case 'sms':
          const result = await this.$api.users.checkCode(this.phone, this.code)
          console.log(result)
          if (result.success) {
            this.stage = 'userpass'
            this.error = ''
          } else {
            this.setError(reply.error.error)
          }

          break
      }
    }
  }
}
