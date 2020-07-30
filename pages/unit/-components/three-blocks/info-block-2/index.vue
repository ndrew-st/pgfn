<template>
  <InfoBlock class="info-block-container">
    <div
      v-if="getTimeArr('departureTime')"
      class="info-block-container__item info-unit"
    >
      <h3 class="info-unit__title">
        Время для звонков
      </h3>

      <ul class="info-unit__list">
        <li
          v-for="(item, index) in getTimeArr('departureTime')"
          :key="index"
          class="info-unit__item"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div
      v-if="getTimeArr('pickUpTime')"
      class="info-block-container__item info-unit"
    >
      <h3 class="info-unit__title">
        Время заезда/показа жилья
      </h3>

      <ul class="info-unit__list">
        <li
          v-for="(item, index) in getTimeArr('pickUpTime')"
          :key="index"
          class="info-unit__item"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div
      v-if="getTimeArr('pickUpTime')"
      class="info-block-container__item info-unit"
    >
      <h3 class="info-unit__title">
        Время выезда гостей
      </h3>

      <ul class="info-unit__list">
        <li
          v-for="(item, index) in getTimeArr('timeForCalls')"
          :key="index"
          class="info-unit__item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </InfoBlock>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
