<template>
  <div class="footer">
    <ul class="footer__list">
      <li class="footer__item">
        <button
          type="button"
          class="footer__button footer__button--clear"
          @click="$emit('clear')"
        >
          Очистить
        </button>
      </li>
      <li class="footer__item">
        <button
          type="button"
          class="footer__button footer__button--save"
          @click="$emit('save')"
        >
          Сохранить
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.footer
  margin: 0 -28px
  border-top 1px solid #ECECEC
  &__list
    display flex
    justify-content: space-between;
    margin: 0
    padding: 20px 28px

    list-style none

    border-radius 0 0 12px 12px

  &__button
    padding 0

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #272528;

    border 0
    background-color transparent
    cursor: pointer;

    &:hover
    &:focus
      outline 0

    &--save
      font-weight bold
</style>
