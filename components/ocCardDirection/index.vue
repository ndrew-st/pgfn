<template>
  <router-link
    class="direction-card"
    :to="'/direction/' + item.name"
  >
      <img
        :alt="item.name"
        :src="item.preview"
        class="direction-card__bg-img">

      <ul class="direction-card__property-list">
        <li
          v-if="item.weather && item.weather.temperature"
          class="direction-card__property direction-card__property--temp"
        >
          {{ item.weather.temperature }}˙C
        </li>
        <li
          v-if="item.weather && item.weather.waterTemperature"
          class="direction-card__property direction-card__property--water-temp">
          {{ item.weather.waterTemperature }}˙C
        </li>
        <li class="direction-card__property direction-card__property--current">
          {{ item.current }}
        </li>
      </ul>

      <button
        @click="$emit('setLike', item.id)"
        :class="{ 'card-liked': isLiked }"
        type="button"
        class="direction-card__button-like">Поставить лайк</button>

      <nuxt-link
        to=""
        class="direction-card__title">{{ item.name }}</nuxt-link>

      <div class="direction-card__footer">
        <p class="direction-card__rate">{{ item.rating }}</p>
        <p class="direction-card__reviews">{{ `${item.reviews} ${numToStr(item.reviews)}` }}</p>
        <p class="direction-card__type">{{ item.type }}</p>
      </div>
  </router-link>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
