<template>
  <InfoBlock
    block-name="Стоимость"
  >
    <div v-if="prices.byTheDay.length">
      <p class="name">
        Посуточно
      </p>
      <p
        class="desc"
      >
        от {{ days(byTheDay.days) }}  <span class="desc__bold"> - {{ byTheDay.price }} <span class="desc__bold--rouble">9</span></span><span class="desc__grey"> за сутки</span>
      </p>
    </div>

    <div v-if="prices.longTerm.length">
      <p class="name">
        На длительный срок
      </p>
      <p
        class="desc"
      >
        от {{ days(longTerm.days) }}  <span class="desc__bold"> - {{ longTerm.price }} <span class="desc__bold--rouble">9</span></span><span class="desc__grey"> за месяц</span>
      </p>
    </div>

    <!--    <a-->
    <!--      href="#"-->
    <!--      class="href-all-items"-->
    <!--    >-->
    <!--      Подробнее о цене-->
    <!--    </a>-->
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped />
