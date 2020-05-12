<template>
  <InfoBlock block-name="Тарифы">
    <div
      v-for="(tariff, index) in tariffs"
      :key="index"
      class="tariff"
    >
      <input
        :id="index"
        type="radio"
        name="tariff"
        class="tariff__radio-input"
      >

      <label
        :for="index"
        class="tariff__name"
      >
        {{ tariff.name }}
      </label>

      <p class="tariff__desc">
        {{ tariff.desc }}
      </p>
    </div>

    <a
      href="#"
      class="href-all-items"
    >
      Показать все варианты
    </a>
  </InfoBlock>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js"/>
