<template>
  <div class="form-header">
    <button
      type="button"
      class="form-header__prev"
      @click.prevent="$emit('changeStep')"
    >
      Назад
    </button>

    <button
      v-if="activeStep && showClear"
      :disabled="!activeClear"
      type="button"
      class="form-header__clear"
      @click.prevent="$emit('clearData')"
    >
      Очистить
    </button>
  </div>
</template>

<script>
export default {
  props: {
    activeStep: {
      type: Number,
      required: true
    },
    activeClear: {
      type: Boolean,
      required: true
    },
    showClear: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.form-header
  display flex
  align-items center
  justify-content space-between
  min-height 84px
  padding 30px 18px

  box-sizing border-box

  &__prev
    display block
    width 6px
    height 12px
    padding 10px

    font-size 0

    border 0
    background-color transparent
    background url('/form/arrow.svg') 50% 50% no-repeat
    background-size 6px 12px

    transition all 0.3s linear 0s
    cursor pointer

    &:hover
      opacity 0.7

      transition opacity 0.3s linear 0s

    &:hover
    &:focus
      outline 0

  &__clear
    display block
    margin-left auto
    margin-right 0
    padding 0

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #272528;

    border 0
    background-color transparent
    cursor pointer

    &:hover
    &:focus
      outline 0

    &:disabled
      color #989BA8

</style>
