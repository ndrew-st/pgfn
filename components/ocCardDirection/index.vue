<template>
  <router-link
    class="direction-card"
    :style="{ 'background-image': `url(${image})` }"
    :to="'/direction/' + item.name"
  >

    <ul class="direction-card__property-list">
      <li class="direction-card__property direction-card__property--temp">
        {{ weather.temperature }}˙C
      </li>
      <li
        v-if="weather.waterTemperature"
        class="direction-card__property direction-card__property--water-temp"
      >
        {{ weather.waterTemperature }}˙C
      </li>
      <li class="direction-card__property direction-card__property--current">
        {{ item.current }}
      </li>
    </ul>

    <button
      :class="{ 'card-liked': isLiked }"
      type="button"
      class="direction-card__button-like"
      @click="$emit('setLike', item.id)"
    >
      Поставить лайк
    </button>

    <h3
      class="direction-card__title"
    >
      {{ item.name }}
    </h3>

    <div class="direction-card__footer">
      <p class="direction-card__rate">
        {{ item.rating }}
      </p>
      <p class="direction-card__reviews">
        {{ `${item.reviews} ${numToStr(item.reviews)}` }}
      </p>
      <p class="direction-card__type">
        {{ item.type }}
      </p>
    </div>
  </router-link>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
