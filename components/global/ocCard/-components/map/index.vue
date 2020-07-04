<template>
  <div
    ref="cont"
    class="card-map"
  >
    <div class="card-map__map-container">
      <client-only>
        <OcMaps
          class="card-map__map"
          :zoom="11"
          :coords="item.address.coords"
        />
      </client-only>
    </div>

    <div
      class="card-map__title"
      :class="{ 'title-more': titleHeight > 48 }"
    >
      <p
        ref="title"
        class="card-map__title--cont title-cont"
      >
        <OcLink
          to="/"
          name="main-card-title"
          class="card-map__title--link"
        >
          {{ item.name }}
        </OcLink>
      </p>
    </div>

    <p class="card-map__type">
      {{ item.type }}
    </p>

    <p class="card-map__rooms">
      {{ item.rooms }}
    </p>

    <p class="card-map__days">
      {{ item.days }}
    </p>

    <p class="card-map__price">
      <span class="card-map__price--count">{{ item.price }}</span>
      <span class="card-map__price--rouble">9</span>
      <span class="card-map__price--measure">{{ item.measure }}</span>
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
