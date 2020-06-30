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

<style lang="stylus" src="./index.styl" scoped/>
