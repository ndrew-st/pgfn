<template>
  <div class="counter">
    <div class="counter__title-container">
      <h4 class="counter__title">{{title}}</h4>
      <span
        v-if="subTitle"
        class="counter__sub-title">{{subTitle}}</span>
    </div>

    <div class="counter__content">
      <button
        @click.prevent="changeCount(false)"
        :disabled="cur === 0"
        type="button"
        class="counter__button counter__button--left">Меньше</button>
      <span class="counter__current">{{cur}}</span>
      <button
        @click.prevent="changeCount(true)"
        type="button"
        class="counter__button counter__button--right">Больше</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      cur: this.current
    }
  },
  watch: {
    cur (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    changeCount (flag) {
      if (flag) {
        this.cur += 1
      } else if (this.cur >= 1) {
        this.cur -= 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.counter
  display flex
  align-items center
  justify-content space-between

  &__title
    margin 0
    margin-bottom 5px

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #272528;

  &__sub-title
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #989BA8;

  &__content
    width 100%
    max-width 108px
    display flex
    align-items center
    justify-content space-between

  &__current
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #272528;

  &__button
    position relative

    display block
    padding 0
    width 32px
    height 32px

    font-size 0

    background: #FFFFFF;
    border: 1px solid #272528;
    box-sizing: border-box;
    border-radius 50%

    cursor pointer

    &:hover
    &:focus
      outline 0

    &--right
      &:before
      &:after
        content ''

        position absolute
        left 0
        right 0
        top 0
        bottom 0

        width: 8px;
        height: 1px;
        margin auto

        border-radius 5px
        background-color #272528

      &:before
        transform rotate(-90deg)

    &--left
      &:before
        content ''

        position absolute
        top 0
        bottom 0
        left 0
        right 0

        width 8px
        height 1px
        margin auto

        border-radius 5px
        background-color #272528

    &--left
    &--right
      cursor pointer
      &:not(disabled):hover
        &:before
        &:after
          background-color #fff
          transition all 0.3s ease-in-out 0s

    &:hover
      background-color black
      transition all 0.3s ease-in-out 0s

    &:disabled
      border-color #989BA8
      cursor auto

      &:hover
        background-color #FFFFFF

        &:before
        &:after
          background-color black

</style>
