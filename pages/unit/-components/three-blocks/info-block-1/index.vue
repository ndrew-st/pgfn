<template>
  <InfoBlock block-name="Тарифы">
    <div
      v-for="(tariff, index) in tariffs"
      :key="index"
      class="tariff"
    >
      <OcRadio
        v-model="current"
        icon="circle-radio"
        name="tariff"
        kind="circle"
        :check-value="tariff.value"
        :label="tariff.name"
        :add-desc="tariff.desc"
      />
    </div>

    <!--    <a-->
    <!--      href="#"-->
    <!--      class="href-all-items"-->
    <!--    >-->
    <!--      Показать все варианты-->
    <!--    </a>-->
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
