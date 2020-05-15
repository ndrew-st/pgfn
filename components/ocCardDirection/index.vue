<template>
  <div
    class="direction-card"
    :style="{ 'background-image': `url(${image})` }"
    @click="goTo"
  >
    <ul class="direction-card__property-list">
      <li
        data-tooltip="Температура воздуха"
        class="direction-card__property direction-card__property--temp"
      >
        {{ weather.temperature }}˙C
      </li>
      <li
        v-if="weather.waterTemperature"
        data-tooltip="Температура воды"
        class="direction-card__property direction-card__property--water-temp"
      >
        {{ weather.waterTemperature }}˙C
      </li>
      <li
        data-tooltip="Количество объектов"
        class="direction-card__property direction-card__property--current"
      >
        <!--        {{ item.current }}-->
        358922
      </li>
    </ul>

    <button
      :class="{ 'card-liked': isLiked }"
      type="button"
      class="direction-card__button-like"
      @click="$emit('setLike', item.id)"
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
