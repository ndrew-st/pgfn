<template>
    <div class="count">
      <span
        v-if="params.label"
        class="count__title">{{params.label}}</span>
      <p class="count__container">
        <button
          @click="lower"
          :disabled="current <= 1"
          class="count__button count__button--prev"
          type="button">-</button>
        <label class="count__label">
          <input
            v-model.number="current"
            type="text"
            class="count__content">
        </label>
        <button
          @click="upper"
          class="count__button count__button--next"
          type="button">+</button>
      </p>
    </div>
</template>

<script>
export default {
  name: 'Count',
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    },
    setValue: {
      type: [String, Number],
      default: ''
    },
    defaultVal: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      current: 0
    }
  },
  watch: {
    current (newVal) {
      this.$emit('input', newVal)
    }
  },
  created () {
    if (this.setValue) {
      this.current = this.setValue
    } else if (this.defaultVal) {
      this.current = this.defaultVal
    }
  },
  methods: {
    upper () {
      this.current += 1
    },
    lower () {
      this.current -= 1
    }
  }
}
</script>

<style lang="stylus">
.count
  display flex
  justify-content space-between
  align-items center
  max-width 250px

  &__title
    margin-bottom 5px

  &__container
    width 60px
    display flex
    align-items center
    justify-content space-between

  &__label
    width: 20px

  &__content
    width: 100%;
    box-sizing: border-box;
    border: 0
    text-align: center;

    &:hover,
    &:focus
      outline 0

  &__button
    position: relative

    width: 12px
    height 12px
    padding 0
    font-size 0
    background-color transparent
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5)

    cursor pointer

    &:hover,
    &:focus
      outline 0

    &:disabled
      opacity 0.5
      cursor auto

    &--prev:before,
    &--next:before
      content ''
      position absolute
      top 0
      left 0
      right 0
      bottom 0

      width 6px
      height 1px
      margin auto

      background-color rgba(0, 0, 0, 0.5)

    &--next:after
      content ''
      position absolute
      top 0
      left 0
      right 0
      bottom 0

      width 1px
      height 6px;
      margin auto

      background-color rgba(0, 0, 0, 0.5)
</style>
