<template>
  <div class="all">
    <br>
    <br>
    <br>
    <br>
    <input
      id="eight"
      v-model="picked"
      value="8"
      type="radio"
    >
    <label for="eight">8</label>
    <input
      id="nine"
      v-model="picked"
      value="9"
      type="radio"
    >
    <label for="nine">9</label>
    <input
      id="ten"
      v-model="picked"
      value="10"
      type="radio"
    >
    <label for="ten">10</label>
    <input
      id="eleven"
      v-model="picked"
      value="11"
      type="radio"
    >
    <label for="eleven">11</label>
    <input
      id="twelve"
      v-model="picked"
      value="12"
      type="radio"
    >
    <label for="twelve">12</label>
    <input
      id="thirteen"
      v-model="picked"
      value="13"
      type="radio"
    >
    <label for="thirteen">13</label>

    <OcVerification
      mode="signup"
      :stage="picked"
      :phone-number="phoneNumber"
      @cpn="cpn"
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
    picked: 0,
    phoneNumber: ''
  }),
  methods: {
    cpn (newPhoneNumber) {
      this.phoneNumber = newPhoneNumber
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
