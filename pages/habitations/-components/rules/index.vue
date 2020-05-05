<template>
  <div class="flex">
    <div class="rules">
      <p class="rules__p">
        Правила размещения
      </p>

      <span
        v-for="(rule, index) in rules1"
        :key="index"
        class="rules__span"
      > • {{ rule }}</span>
    </div>

    <div class="rules pl40">
      <p class="rules__p">
        Ограничения
      </p>

      <span
        v-for="(rule, index) in rules2"
        :key="index"
        class="rules__span"
      > • {{ rule }}</span>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped/>

<script src="./index.js"/>
