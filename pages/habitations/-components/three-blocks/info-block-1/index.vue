<template>
  <InfoBlock block-name="Тарифы">
    <div
      v-for="(tariff, index) in tariffs"
      :key="index"
      class="tariff"
    >
      <OcInput
        v-model="current"
        type="radio"
        icon="circle-radio"
        icon-position="left"
        name="tariff"
        kind="circle-radio"
        :check-value="tariff.value"
        :label="tariff.name"
        :add-desc="tariff.desc"
      />
    </div>

    <a
      href="#"
      class="href-all-items"
    >
      Показать все варианты
    </a>
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
