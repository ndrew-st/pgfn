<template>
  <div class="more-block-container price-more hidden">
    <div
      v-if="content.byTheDay.length"
      class="more-block-container__content"
    >
      <h5 class="more-block-container__title">
        Посуточно
      </h5>
      <ul class="more-block-container__list">
        <li
          v-for="(item, index) in content.byTheDay"
          :key="index"
          class="more-block-container__item"
        >
          от {{ days(item.days) }}  <span class="desc__bold"> - {{ item.price }} <span class="desc__bold--rouble">9</span></span><span class="desc__grey"> за сутки</span>
        </li>
      </ul>
    </div>

    <div
      v-if="content.longTerm.length"
      class="more-block-container__content"
    >
      <h5 class="more-block-container__title">
        Длительный срок
      </h5>
      <ul class="more-block-container__list">
        <li
          v-for="(item, index) in content.longTerm"
          :key="index"
          class="more-block-container__item"
        >
          от {{ days(item.days) }}  <span class="desc__bold"> - {{ item.price }} <span class="desc__bold--rouble">9</span></span><span class="desc__grey"> за месяц</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
