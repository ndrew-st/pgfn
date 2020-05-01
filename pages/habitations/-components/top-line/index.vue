<template>
  <div class="top">
    <div class="flex">
      <span
        v-for="(item, index) in topPath"
        :key="index"
        class="top__path"
      >{{ item }}{{ topPath.length === index + 1 ? '' : ' • ' }}</span>
    </div>
    <div class="top">
      <div class="top__btn">
        Сохранить
      </div>
      <div class="top__btn">
        Пожаловаться
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js"/>
