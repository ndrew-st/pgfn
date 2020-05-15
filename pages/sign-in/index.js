import OcVerification from '@/components/ocVerification/index.vue'
// import { makePr } from '@/api/user.js'
import OcPhoneNumber from '@/components/ocPhoneNumber/index.vue'
import OcPass from '@/components/ocPass/index.vue'

export default {
  components: {
    OcVerification,
    OcPhoneNumber,
    OcPass
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
    login (pass) {
      console.log('sign-in login')
      // debugger
      if (this.attemptCounter < 5) {
        // const login = async (phone, password) => {
        //   try {
        //     const userData = await axios.post('https://dev.personal.guide/api/users/login', { phone, password })
        //     console.log('THIS USER IS:', userData.data)
        //   } catch (e) {
        //     console.log('ERROR MESSAGE:', e.response.data)
        //   }
        // }
        // login(this.phone, pass)
        // const makePr = (phone, password) => axios.post('https://dev.personal.guide/api/users/login', { phone, password })
        // const pr = makePr({ phone: '+71234567890', password: 'aasdfasdf' })
        // const pr = makePr(this.phone, pass)
        // pr.then((res) => {
        //   debugger
        //   console.log('Промис выполнен успешно ' + JSON.stringify(res))
        //   console.log('data ' + res.data)
        // console.log('Промис выполнен успешно ' + res.data.BTC.USD)

        // Допустим сервак вернул объект

        // const reply = {
        //   tokens: {
        //     accessToken: 'string (jwt)',
        //     refreshToken: 'string (jwt)'
        //   },
        //   user: {
        //     id: 'string',
        //     name: 'string',
        //     phone: 'string'
        //   }
        // }
        // // error
        // const reply2 = {
        //   error: 'error message'
        // }

        // this.stage = вернуться на исходную страницу или в корень сайта
        // if (res.error) {
        //   this.stage = 'wrongLoginPassword'
        // } else {
        //   this.$router.push('/')
        // }

        // if ()

        if (this.picked === '3') {
          // правильный пароль. Куда перемещаемся?
          this.$router.push('/')
        } else if (this.picked === '4') {
          this.attemptCounter++
          this.error = 'Неверная комбинация логина и пароля'
        } else if (this.picked === '5') {
          this.attemptCounter++
          this.error = 'Пользователь заблокирован'
        }
        // }, (res) => {
        //   // debugger // больше интересует эта часть, отбойники
        //   console.log('Промис выполнен неудачно ' + JSON.stringify(res))
        //   console.log('data ' + res.data)
        // })
      } else {
        this.error = ''
        this.stage = 'timer'

        const timerId = setInterval(() => {
          this.timeCounter -= 1
          if (this.timeCounter > 0) {
          } else {
            clearInterval(timerId)
            this.stage = 'phone'
          }
        }, 1000, this.timeCounter)
      }
    },
    next (par) {
      console.log('next sign-in ')
      switch (this.stage) {
        case 'phone':
          if (this.picked === '1') {
            // debugger
            // this.$router.hash = '#pass'
            // window.history.pushState({ f: 'asdf' }, 'login', '/pass')
            this.phone = par
            this.stage = 'pass'
          } else {
            this.error = 'Номер не может быть использован для входа'
          }
          break
        case 'pass':
          if (this.picked === '6') {
            this.attemptCounter = 5
          }
          this.pass = par
          this.login(par)
          break
      }
    }
  }
}
