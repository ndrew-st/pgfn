<template>
  <InfoBlock
    block-name="Стоимость"
  >
    <div
      v-for="(price, index) in prices"
      :key="index"
    >
      <p class="name">
        {{ price.name }}
      </p>

      <p class="desc">
        {{ price.minPeriod }}  <span class="desc__bold">{{ price.price }}</span><span class="desc__grey">{{ price.pricePeriod }}</span>
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

<style src="./index.styl" lang="stylus" scoped />

<script src="./index.js"/>
