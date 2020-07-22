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
          :to="`/request/${item.id}`"
          class="card-map__title--link"
        >
          {{ item.title }}
        </nuxt-link>
      </p>
    </div>

    <p class="card-map__type">
      {{ typeHouse[parseInt(item.typeOfHousing)] }}
    </p>

    <div class="card-map__rooms map-rooms">
      <ul class="map-rooms__list">
        <li
          v-for="(unit, index) in item.numberOfRooms"
          :key="index"
          class="map-rooms__item"
        >
          {{ unit }}
          <span
            v-if="index < item.numberOfRooms.length - 1"
            class="map-rooms"
          >&nbsp;/&nbsp;</span>
        </li>
      </ul>
      &nbsp;комнат
    </div>

    <p class="card-map__days">
      {{ date }}
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
