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
          @click="goTo(`/request/${item._id}`)"
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

    <!--    <p class="card-map__type">-->
    <!--      {{ typeHouse }}-->
    <!--    </p>-->

    <div
      class="card-map__address card-address"
      :class="{ 'address-more': addressWidth > widthContainer }"
    >
      <ul
        ref="addressCt"
        class="card-address__list card-list"
      >
        <li
          v-for="(item, index) in address"
          :key="index"
          class="card-address__item"
        >
          <nuxt-link
            class="card-address__link card-link"
            :to="`direction/${item}`"
          >
            {{ item }}
          </nuxt-link>
          <span v-if="index < address.length - 1">,&nbsp;</span>
        </li>
      </ul>
    </div>

    <p class="card-map__days">
      {{ date }}
    </p>

    <p class="card-map__price">
      <span class="card-map__price--count">{{ (item.price * dayCount).toLocaleString() }}</span>
      <span class="card-map__price--rouble">9</span>
      <!-- <span class="card-map__price--measure">за сутки</span> -->
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
