<template>
    <div class="intro">
      <button
        :disabled="disabledBack"
        @click.prevent="$emit('changeStep')"
        class="intro__back"
        type="button">Назад</button>
        <span class="intro__title">{{title}}</span>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    disabledBack: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="stylus">
  .intro
    padding 0 30px
    padding-bottom 10px

    border-bottom: 1px solid rgba(0, 0, 0, 0.1)

    &__back
      position relative
      width 70px;
      height 25px;
      margin-right: 10px;
      padding-left 10px

      font-weight 400;
      font-size 15px;
      color rgb(115, 115, 115)

      background-color transparent;
      border-radius 2px
      border 1px solid rgb(115, 115, 115)

      cursor pointer
      opacity 1
      transition opacity 0.3s linear 0s

      &:disabled
        cursor: default;
        opacity 0.5
        &:hover
          opacity 0.5

      &:hover
      &:focus
        opacity 0.9
        outline 0

      &:before
        content ''
        position absolute
        top 0
        bottom 0
        left 5px

        width 10px
        height 7px
        margin auto 0

        background-image url('/modal/arrow-back-button.svg')
        background-position 0 0
        background-size 10px 7px
        background-repeat no-repeat

        transform rotate(90deg)

    &__title
      font-weight: 400;
      font-size: 13px;
      line-height: 25px;
      color: rgb(115, 115, 115);
</style>
