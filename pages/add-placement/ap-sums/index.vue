<template>
  <div class="ap-sums">
    <input
      v-model="cost"
      class="ap-sums__input"
      placeholder="Стоимость"
    >

    <span
      v-if="cost !==''"
      class="ap-sums__rub"
    >₽</span>

    <span
      class="ap-sums__slash"
    >/</span>

    <input
      v-model="pledge"
      class="ap-sums__input"
      placeholder="Сумма залога"
    >

    <span
      v-if="pledge !==''"
      class="ap-sums__rub"
    >₽</span>

    <span
      class="ap-sums__slash"
    >/</span>

    <input
      v-model="interest"
      class="ap-sums__input"
      placeholder="Комиссия"
    >

    <span
      v-if="interest !==''"
      class="ap-sums__rub"
    >₽</span>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
