<template>
  <InfoBlock
    block-name="Стоимость"
  >
    <div>
      <p class="name">
        Посуточно
      </p>
      <p
        v-for="(item, index) in prices.byTheDay"
        :key="index"
        class="desc"
      >
        от {{ item.days }}  <span class="desc__bold">  {{ item.price }}</span><span class="desc__grey"> за сутки</span>
      </p>
    </div>

    <div>
      <p class="name">
        На длительный срок
      </p>
      <p
        v-for="(item, index) in prices.longTerm"
        :key="index"
        class="desc"
      >
        от {{ item.days }}  <span class="desc__bold">  {{ item.price }}</span><span class="desc__grey"> за месяц</span>
      </p>
    </div>

    <a
      href="#"
      class="href-all-items"
    >
      Подробнее о цене
    </a>
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped />
