<template>
  <div class="password-recovery">
    <OcVerification>
      <OcSmsCode
        v-if="stage === 'sms'"
        :phone="$route.params.phone"
        :error="error"
        :time-counter="timeCounter"
        :recovery="true"
        @next="next"
      />

      <p
        v-if="stage === 'pass'"
        class="p15"
      >
        Придумайте пароль
      </p>

      <OcPass
        v-if="stage === 'pass'"
        error=""
        btn-text="Готово"
        @next="next"
      />
    </OcVerification>
  </div>
</template>

<script>
import OcVerification from '@/components/ocVerification/index.vue'
import OcSmsCode from '@/components/ocSmsCode/index.vue'
import OcPass from '@/components/ocPass'

export default {
  components: {
    OcVerification,
    OcSmsCode,
    OcPass
  },
  props: { phone: {
    type: String,
    default: '' }
  },
  data: () => ({
    stage: 'sms',
    picked: '',
    timeCounter: 119
  }),
  methods: {
    next () {
      if (this.stage === 'sms') {
        this.stage = 'pass'
      }
    }
  }
}
</script>

<style src="./index.styl" lang="stylus"></style>
