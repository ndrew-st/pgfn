<template>
  <div
    v-lazy:bg
    class="direction-card"
    :data-url="image"
    @click="goTo"
  >
    <FeaturePlace
      :temperature="weather.temperature"
      :water-temperature="weather.waterTemperature"
      :count="weather.current"
    />

    <button
      :class="{ 'card-liked': isLiked }"
      type="button"
      class="direction-card__button-like"
      @click.stop.prevent="$emit('setLike', item.id)"
    >
      <OcIcon
        class="direction-card__button-like--icon"
        name="heart"
      />
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
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
