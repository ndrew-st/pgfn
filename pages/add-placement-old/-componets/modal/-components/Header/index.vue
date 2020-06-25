<template>
  <div class="modal-header">
    <h2 class="modal-header__title">Новое предложение</h2>
    <button
      class="modal-header__close"
      type="button">Закрыть</button>
  </div>
</template>

<style lang="stylus" scoped>
.modal-header
  position relative
  display: flex;
  flex-wrap wrap
  align-content space-between
  width 100%;
  padding 0 30px
  margin-bottom 20px

  &__title
    display: block;
    flex-basis 100%
    font-family: inherit;
    font-weight 400;
    line-height 1.4;
    font-size 14px;
    color rgb(84, 84, 84);
    text-decoration none;

  &__close
    position: absolute;
    top 0
    right 100px

    width 70px;
    height 25px;
    padding-left 10px

    font-weight 400;
    font-size 15px;
    color rgb(115, 115, 115)

    background-color transparent;
    border-radius 2px
    border: 0

    cursor pointer
    opacity 1
    transition opacity 0.3s linear 0s

    &:hover
      opacity 0.7

    &:hover
    &:focus
      outline 0

    &:before
    &:after
      content ''
      position absolute
      left 0
      top 0
      bottom 0

      width 1px
      height 12px
      margin auto 0

      background-color black

    &:before
      transform rotate(45deg)

    &:after
      transform rotate(-45deg)
</style>
