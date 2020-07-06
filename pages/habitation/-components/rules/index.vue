<template>
  <div class="rules-flex">
    <div class="rules-flex__box1">
      <p class="rules-flex__p1">
        Правила размещения
      </p>

      <span
        v-for="(rule, index) in rules1"
        :key="index"
        class="rules-flex__span"
      > • {{ rule }}</span>
    </div>

    <div class="rules-flex__box2">
      <p class="rules-flex__p2">
        Ограничения
      </p>

      <span
        v-for="(rule, index) in rules2"
        :key="index"
        class="rules-flex__span"
      > • {{ rule }}</span>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
