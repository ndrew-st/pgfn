<template>
  <div class="habitation__top">
    <div class="habitation__top__flex">
      <span
        v-for="(item, index) in topPath"
        :key="index"
        class="habitation__top__path"
      >{{ item }}{{ topPath.length === index + 1 ? '' : ' • ' }}</span>
    </div>

    <div class="habitation__top-btns">
      <div class="habitation__top__btn">
        Сохранить
      </div>

      <div class="habitation__top__btn habitation__top__complain">
        Пожаловаться
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js"/>
