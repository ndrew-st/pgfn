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

    <OcButton
      class="direction-card__button-like"
      name="transparent"
      icon="heart"
      add-class="heart"
      :active="isLiked"
      @click.stop.prevent="$emit('setLike', item.id)"
    >
      Поставить лайк
    </OcButton>

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
