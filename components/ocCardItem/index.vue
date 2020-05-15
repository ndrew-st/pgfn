<template>
  <div class="card-item">
    <div class="card-item__list">
      <Carousel
        :nav="true"
        :column="1"
        :dots="true"
        :show="false"
        :scroll="false"
        :items="item.previewGallery"
        class="card-item__swiper"
      >
        <div
          v-for="(gallery, index) in item.previewGallery"
          :key="index"
          class="card-item__img-container"
        >
          <img
            :src="gallery"
            :alt="item.name"
            class="card-item__image"
          >
        </div>
      </Carousel>
    </div>

    <nuxt-link
      to="/habitations/1"
      class="card-item__title"
    >
      {{ item.name }}
    </nuxt-link>

    <p class="card-item__settings">
      <span class="card-item__rate">{{ item.rating }}</span>
      <span class="card-item__reviews">{{ `${item.reviews} ${numToStr(item.reviews)}` }}</span>
      <span class="card-item__type">{{ item.type }}</span>
    </p>

    <button
      :class="{ 'card-liked': isLiked }"
      type="button"
      class="card-item__button-like"
      @click="$emit('setLike', item.id)"
    >
      Поставить лайк
    </button>

    <p class="card-item__address">
      {{ item.address }}
    </p>

    <ul
      v-if="type === 'housing'"
      class="card-item__attrs"
    >
      <li
        v-for="attr in attrs"
        :key="attr"
        class="card-item__attr"
      >
        {{ attr }}
      </li>
    </ul>

    <p class="card-item__price-container">
      <span
        v-if="item.oldprice"
        class="card-item__old-price"
      >{{ item.oldprice }} ₽</span>
      <span class="card-item__price">от {{ item.price }} ₽</span>
      <span class="card-item__type-price">{{ item.typePrice }}</span>
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
