<template>
  <div class="habitation-top">
    <div class="habitation-top__container">
      <span
        v-for="(item, index) in topPath"
        :key="index"
        class="habitation-top__path"
      >{{ item }}{{ topPath.length === index + 1 ? '' : ' • ' }}</span>
    </div>

    <div class="habitation-top__btns">
      <OcButton
        name="border"
        class="habitation-top__btn"
      >
        Сохранить
      </OcButton>

      <OcButton
        class="habitation-top__btn habitation-top__btn--complain"
        name="border"
      >
        Пожаловаться
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
