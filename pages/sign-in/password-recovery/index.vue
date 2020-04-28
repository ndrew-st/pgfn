<template>
  <div class="password-recovery">
    <br>
    <br>
    <br>
    <br>
    <input
      id="fourteen"
      v-model="picked"
      value="14"
      type="radio"
    >
    <label for="fourteen">14</label>
    <input
      id="fiveteen"
      v-model="picked"
      value="15"
      type="radio"
    >
    <label for="fiveteen">15</label>

    <OcVerification
      mode="recovery"
      :stage="stage"
      :phone="phone"
      @next="next"
      @cpn1="cpn1"
    >
      <p
        v-if="mode === 'recovery' && stage === 'phone'"
        class="p14"
      >
        Для восстановления доступа введите код из смс <br>
        отправленного на номер <b>+7 {{ phone }}</b>
      </p>

      <input
        v-if="stage === 'sms'"
        ref="codeInput"
        type="text"
        class="code14"
        placeholder="••••"
        @input="mask"
      >

      <OcPass
        v-if="stage === 'pass'"
        :mode="mode"
        :error="error"
        @next="next"
      />
    </OcVerification>
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
    phone: ''
  }),
  methods: {
    cpn1 (newPhoneNumber) {
      this.phone = newPhoneNumber
    },
    next (pass) {
      if (this.stage === 'phone') {
        this.stage = 'pass'
      }
    }
  }
}
</script>

<style src="./index.styl" lang="stylus"></style>
