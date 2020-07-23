<template>
  <div
    ref="cont"
    class="card-map"
  >
    <div class="card-map__map-container">
      <client-only>
        <ImgMap
          class="card-map__map"
          :coords="(item.address && item.address.coords) || cords"
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
        <nuxt-link
          :to="`/request/${item._id}`"
          class="card-map__title--link"
        >
          {{ title }}
        </nuxt-link>
      </p>
    </div>

    <p class="card-map__type">
      {{ typeHouse }}
    </p>

    <p class="card-map__rooms">
      {{ countRooms }}
    </p>

    <p class="card-map__days">
      {{ date }}
    </p>

    <p class="card-map__price">
      <span class="card-map__price--count">{{ price && price.price.toLocaleString() }}</span>
      <span class="card-map__price--rouble">9</span>
      <span class="card-map__price--measure">{{ measure }}</span>
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
