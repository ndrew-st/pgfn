<template>
  <div class="form-controls">
    <button
      @click.prevent="$emit('changeStep')"
      :disabled="activeStep + 1 === stepLength"
      type="button"
      class="form-controls__miss">Пропустить</button>

    <button
      v-if="activeStep + 1 === stepLength"
      @click.prevent="$emit('submit')"
      type="button"
      class="form-controls__save">Искать</button>
    <button
      v-else
      @click.prevent="$emit('changeStep')"
      :disabled="activeNext"
      type="button"
      class="form-controls__save">Далее</button>
  </div>
</template>

<script>
export default {
  props: {
    activeStep: {
      type: Number,
      required: true
    },
    stepLength: {
      type: Number,
      required: true
    },
    activeNext: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.form-controls
  position fixed
  bottom 0
  left 0
  right 0

  display flex
  align-items center
  justify-content space-between
  padding 12px 18px

  background-color white

  &__miss
    padding 0

    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 20px;
    color: #272528;

    border 0
    background-color transparent
    cursor pointer
    transition all 0.3s linear 0s

    &:hover
    &:focus
      outline 0

    &:hover
      opacity 0.7
      transition opacity 0.3s linear 0s

  &__save
    display block
    width 184px
    height 48px
    padding 0

    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #FFFFFF;

    background: #5604C1;
    border-radius: 4px;
    border 0
    cursor pointer
    transition all 0.3s linear 0s

    &:hover
    &:focus
      outline 0

    &:hover
      opacity 0.7
      transition opacity 0.3s linear 0s

    &:disabled
      opacity 0.5
      &:hover
        opacity 0.5

</style>
