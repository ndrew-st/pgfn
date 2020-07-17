<template>
  <div class="rules-flex">
    <div class="rules-flex__box1">
      <p class="rules-flex__p1">
        Правила размещения
      </p>

      <span class="rules-flex__span"> &middot; {{ reservation[rules1.typeOfReservation] }}</span>
      <span class="rules-flex__span"> &middot; {{ policy[rules1.cancellationPolicy] }}</span>
    </div>

    <div
      v-if="limits.length"
      class="rules-flex__box2"
    >
      <p class="rules-flex__p2">
        Ограничения
      </p>

      <span
        v-for="(rule, index) in limits"
        :key="index"
        class="rules-flex__span"
      > &middot; {{ rule.label }}</span>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
