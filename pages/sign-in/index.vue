<template>
  <div class="all">
    <router-link
      to="/sign-in/password-recovery"
    >
      password recovery
    </router-link>

    <OcVerification
      :phone="phone"
      :stage="stage"
      @cpn1="cpn1"
      @next="next"
    />
  </div>
</template>

<script>
import OcVerification from '@/components/ocVerification/index.vue'
import { makePr } from '@/api/user.js'

export default {
  components: {
    OcVerification
  },
  data: () => ({
    stage: 'phone',
    phone: '',
    pass: ''
  }),
  methods: {
    cpn1 (newPhoneNumber) {
      this.phone = newPhoneNumber
    },
    login (pass) {
      const pr = makePr(this.pass)
      pr.then((res) => { console.log('Промис выполнен успешно ' + JSON.stringify(res)) },
        (res) => { console.log('Промис выполнен неудачно ' + res) })
    },
    next (pass) {
      switch (this.stage) {
        case 'phone':
          this.stage = 'pass'
          break
        case 'pass':
          console.log('мы получили пароль')
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
