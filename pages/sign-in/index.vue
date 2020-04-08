<template>
  <div class="all">
    <br>
    <br>
    <br>
    <br>
    <input
      id="one"
      v-model="picked"
      value="1"
      type="radio"
    >
    <label for="one">1</label>
    <input
      id="two"
      v-model="picked"
      value="2"
      type="radio"
    >
    <label for="two">2 (заполните номер)</label>
    <input
      id="three"
      v-model="picked"
      value="3"
      type="radio"
    >
    <label for="three">3</label>
    <input
      id="four"
      v-model="picked"
      value="4"
      type="radio"
    >
    <label for="four">4</label>
    <input
      id="five"
      v-model="picked"
      value="5"
      type="radio"
    >
    <label for="five">5</label>
    <input
      id="six"
      v-model="picked"
      value="6"
      type="radio"
    >
    <label for="six">6</label>
    <input
      id="seven"
      v-model="picked"
      value="7"
      type="radio"
    >
    <label for="seven">7</label>

    <router-link
      to="/sign-in/password-recovery"
    >
      password recovery
    </router-link>

    <OcVerification
      mode="signin"
      :stage="picked"
      :phone-number="phoneNumber"
      @changePhoneNumber="changePhoneNumber"
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
    changePhoneNumber (newPhoneNumber) {
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
