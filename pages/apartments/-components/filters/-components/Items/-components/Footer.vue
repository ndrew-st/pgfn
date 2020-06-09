<template>
  <div class="footer">
    <ul class="footer__list">
      <li class="footer__item">
        <OcButton
          name="transparent"
          add-class="filter-button filter-button__clear"
          @click="$emit('clear')"
        >
          Очистить
        </OcButton>
      </li>
      <li class="footer__item">
        <OcButton
          name="transparent"
          add-class="filter-button filter-button__save"
          @click="$emit('save')"
        >
          Сохранить
        </OcButton>
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
</style>
