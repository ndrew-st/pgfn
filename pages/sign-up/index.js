import OcVerification from '@/components/ocVerification/index.vue'
import { serverRequest } from '@/api/out.js'
import OcPhoneNumber from '@/components/ocPhoneNumber/index.vue'
import OcSmsCode from '@/components/ocSmsCode/index.vue'
import UserPass from './user-pass/index.vue'

export default {
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
    attemptCounter: 0,
    picked: 0,
    timeCounter: 119
  }),
  methods: {
    next (par) {
      switch (this.stage) {
        case 'phone':

          this.phone = par

          const reply = serverRequest('get-code', { phone: this.phone })
          if (reply.success) {
            // debugger
            // this.stage = 'sms'
            // const x = setInterval(() => {
            //   this.timeCounter -= 1
            //   if (this.timeCounter < 1) {
            //     clearInterval(x)
            //   }
            // }, 1000)
            console.log('Запрос на получение кода успешно выполнен')
          } else {
            // debugger
            switch (reply) {
              case 'You only recently sent SMS!':
                // this.stage = 'sms'
                break
              case 'Code is out of date!':
                // этого тут не должно быть
                // this.error = 'wrongNumber'
                break
              case 'Phone number is incorrect!':
                // this.error = 'wrongNumber'
                break
            }
          }

          if (this.picked === '8') {
            this.stage = 'sms'
            const x = setInterval(() => {
              this.timeCounter -= 1
              if (this.timeCounter < 1) {
                clearInterval(x)
              }
            }, 1000)
          } else if (this.picked === '9') {
            this.error = 'Номер не может быть использован для входа'
          }
          break
        case 'sms':
          if (this.picked === '10') {
            this.error = 'Данный код устарел. Пожалуйста, получите новый код в смс'
          } else if (this.picked === '11') {
            this.error = 'Неверный код подтверждения'
          } else if (this.picked === '12') {
            this.error = 'Номер телефона уже зарегистрирован в системе'
          } else if (this.picked === '13') {
            this.stage = 'userpass'
          }
          break
      }
    }
  }
}
