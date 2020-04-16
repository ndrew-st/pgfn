<template>
  <div class="all">
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

    <p>phone: {{ phone }}</p>

    <OcVerification
      mode="recovery"
      :stage="stage"
      :phone="phone"
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
