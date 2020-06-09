<template>
  <div>
    <label
      v-for="item in params.items"
      :key="item.name"
      class="label">
      <input
        :name="name"
        :value="item.value"
        v-model="booking"
        type="radio">
      {{item.label}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    setValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      booking: this.setValue || null
    }
  },
  watch: {
    booking (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="stylus" scoped>
.label
  display block

  cursor pointer
</style>
