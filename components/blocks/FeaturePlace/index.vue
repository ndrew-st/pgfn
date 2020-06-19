<template>
  <ul class="property-list">
    <li
      data-tooltip="Температура воздуха"
      class="property-list__item property-list__item--temp"
    >
      {{ temperature }}˙C
    </li>
    <li
      v-if="waterTemperature"
      data-tooltip="Температура воды"
      class="property-list__item property-list__item--water-temp"
    >
      {{ waterTemperature }}˙C
    </li>
    <li
      data-tooltip="Количество объектов"
      class="property-list__item property-list__item--current"
    >
      {{ count }}
    </li>
  </ul>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
