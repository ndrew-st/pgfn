<template>
  <div class="all">
    <router-link
      to="/sign-in/password-recovery"
    >
      password recovery
    </router-link>

    <br><br><br><br>
    <input
      v-if="stage === 'phone'"
      id="one"
      v-model="picked"
      value="1"
      type="radio"
    >
    <label
      v-if="stage === 'phone'"
      for="one"
    >Правильный телефон</label>
    <input
      v-if="stage === 'phone'"
      id="two"
      v-model="picked"
      value="2"
      type="radio"
    >
    <label
      v-if="stage === 'phone'"
      for="two"
    >Телефон в стоп-листе</label>
    <input
      v-if="stage === 'pass'"
      id="three"
      v-model="picked"
      value="3"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="three"
    >Правильный пароль</label>
    <input
      v-if="stage === 'pass'"
      id="four"
      v-model="picked"
      value="4"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="four"
    >Неправильный пароль</label>
    <input
      v-if="stage === 'pass'"
      id="five"
      v-model="picked"
      value="5"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="five"
    >Пользователь заблокирован</label>
    <input
      v-if="stage === 'pass'"
      id="six"
      v-model="picked"
      value="6"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="six"
    >Много попыток</label>

    <p>timeCounter: {{ timeCounter > 60 ? '1 минуту ' + (timeCounter - 60) + ' секунд' : '' + timeCounter + ' секунд' }}</p>

    <OcVerification
      mode="sign-in"
      :phone="phone"
      :stage="stage"
      :error="error"
      :time-counter="timeCounter > 60 ? '1 минуту ' + (timeCounter - 60) + ' секунд' : '' + timeCounter + ' секунд'"
      @cpn1="cpn1"
      @next="next"
    />
  </div>
</template>

<script>
import OcVerification from '@/components/ocVerification/index.vue'
// import { makePr } from '@/api/user.js'
import axios from 'axios'

export default {
  components: {
    OcVerification
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
    cpn1 (newPhoneNumber) {
      this.phone = newPhoneNumber
    },
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
        const makePr = (phone, password) => axios.post('https://dev.personal.guide/api/users/login', { phone, password })
        // const pr = makePr({ phone: '+71234567890', password: 'aasdfasdf' })
        const pr = makePr(this.phone, pass)
        pr.then((res) => {
          debugger
          console.log('Промис выполнен успешно ' + JSON.stringify(res))
          console.log('data ' + res.data)
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
            // правильный пароль
            this.$router.push('/')
          } else if (this.picked === '4') {
            this.attemptCounter++
            this.error = 'wrongPass'
          } else if (this.picked === '5') {
            this.attemptCounter++
            this.error = 'userBlocked'
          }
        },
        (res) => {
          debugger // больше интересует эта часть, отбойники
          console.log('Промис выполнен неудачно ' + JSON.stringify(res))
          console.log('data ' + res.data)
        })
      } else {
        this.error = ''
        this.stage = 'timer'

        const timerId = setInterval(() => {
          this.timeCounter -= 1
          if (this.timeCounter > 0) {
          } else {
            this.timeCounter = 119
            clearInterval(timerId)
            this.stage = 'phone'
          }
        }, 1000, this.timeCounter)
      }
    },
    next (pass) {
      console.log('next sign-in ')
      switch (this.stage) {
        case 'phone':
          if (this.picked === '1') {
            // debugger
            // this.$router.hash = '#pass'
            // window.history.pushState({ f: 'asdf' }, 'login', '/pass')
            this.stage = 'pass'
          } else {
            this.error = 'wrongNumber'
          }
          break
        case 'pass':
          if (this.picked === '6') {
            this.attemptCounter = 5
          }
          this.pass = pass
          this.login(pass)
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.all
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color #E5E5E5

@media (max-width: 750px)
  .all
    background-color #FFFFFF
</style>
