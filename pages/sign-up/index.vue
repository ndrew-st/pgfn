<template>
  <div class="all">
    <br>
    <br>
    <br>
    <br>
    <input
      v-if="stage === 'phone'"
      id="eight"
      v-model="picked"
      value="8"
      type="radio"
    >
    <label
      v-if="stage === 'phone'"
      for="eight"
    >Правильный номер</label>
    <input
      v-if="stage === 'phone'"
      id="nine"
      v-model="picked"
      value="9"
      type="radio"
    >
    <label
      v-if="stage === 'phone'"
      for="nine"
    >Неправильный номер</label>
    <input
      v-if="stage === 'sms'"
      id="ten"
      v-model="picked"
      value="10"
      type="radio"
    >
    <label
      v-if="stage === 'sms'"
      for="ten"
    >Код устарел</label>
    <input
      v-if="stage === 'sms'"
      id="eleven"
      v-model="picked"
      value="11"
      type="radio"
    >
    <label
      v-if="stage === 'sms'"
      for="eleven"
    >Код неправильный</label>
    <input
      v-if="stage === 'sms'"
      id="twelve"
      v-model="picked"
      value="12"
      type="radio"
    >
    <label
      v-if="stage === 'sms'"
      for="twelve"
    >Номер уже зарегистрирован</label>
    <input
      v-if="stage === 'sms'"
      id="thirteen"
      v-model="picked"
      value="13"
      type="radio"
    >
    <label
      v-if="stage === 'sms'"
      for="thirteen"
    >Код правильный</label>

    <OcVerification
      mode="sign-up"
      :phone="phone"
      :stage="stage"
      :error="error"
      @next="next"
      @cpn1="cpn1"
    />
  </div>
</template>

<script>
import OcVerification from '@/components/ocVerification/index.vue'

export default {
  components: {
    OcVerification
  },
  data: () => ({
    stage: 'phone',
    error: '',
    phone: '',
    attemptCounter: 0,
    picked: 0
  }),
  methods: {
    cpn1 (newPhoneNumber) {
      this.phone = newPhoneNumber
    },
    next () {
      switch (this.stage) {
        case 'phone':
          if (this.picked === '8') {
            this.stage = 'sms'
          } else if (this.picked === '9') {
            this.error = 'wrongNumber'
          }
          break
        case 'sms':
          if (this.picked === '10') {
            this.error = 'old-code'
          } else if (this.picked === '11') {
            this.error = 'wrong-code'
          } else if (this.picked === '12') {
            this.error = 'number-exists'
          } else if (this.picked === '13') {
            this.stage = 'userpass'
          }
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
