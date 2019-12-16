<template>
  <div :class="switcherClass">
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    switcherClass () {
      return (this.active) ? 'switcher active' : 'switcher'
    }
  }
}
</script>

<style lang="stylus">
.switcher
  display block
  position relative
  overflow hidden
  margin 0
  padding 0
  width 24px
  height 30px
  font-size 0
  text-indent -9999px
  appearance none
  box-shadow none
  border-radius none
  border none
  cursor pointer
  transition background 0.3s

  &:focus
    outline none

  &.active
    & span
      background none

      &::before
        top 0
        transform rotate(45deg)

      &::after
        bottom 0
        transform rotate(-45deg)

  & span
    display block
    position absolute
    top 14px
    left 0
    right 0
    height 2px
    background white
    transition all 0.3s

    &::before, &::after
      position absolute
      display block
      left 0
      width 100%
      height 2px
      background-color #fff
      content ""
      transition-duration 0.3s, 0.3s

    &::before
      top -8px
      transition-property top, transform

    &::after
      bottom -8px
      transition-property bottom, transform
</style>
