<template>
  <div class="ap-sums">
    <input
      v-model="locPrice"
      class="ap-sums__input"
      placeholder="Стоимость"
      type="number"
      @change="$emit('changePrice', locPrice)"
    >

    <span
      v-if="locPrice > 0"
      class="ap-sums__rub"
    >₽</span>

    <span
      class="ap-sums__slash"
    >/</span>

    <input
      v-model="locPledge"
      class="ap-sums__input"
      placeholder="Сумма залога"
      type="number"
      @change="$emit('changePledge', locPledge)"
    >

    <span
      v-if="locPledge > 0"
      class="ap-sums__rub"
    >₽</span>

    <span
      class="ap-sums__slash"
    >/</span>

    <input
      v-model="locCommission"
      class="ap-sums__input"
      placeholder="Комиссия"
      type="number"
      @change="$emit('changeCommission', locCommission)"
    >

    <span
      v-if="locCommission > 0"
      class="ap-sums__rub"
    >₽</span>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
