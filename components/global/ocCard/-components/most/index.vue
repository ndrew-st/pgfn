<template>
  <div
    ref="card"
    class="card-item"
    @mouseenter="mouseEnter"
    @touchstart="touchStart"
  >
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
            v-lazy
            :data-url="gallery"
            :alt="item.name"
            class="card-item__image"
          >
        </div>
      </Carousel>
    </div>

    <div
      class="card-item__title"
      :class="{ 'title-more': titleWidth > widthContainer }"
    >
      <p
        ref="titleCt"
        class="card-item__title--link-cont"
      >
        <nuxt-link
          to=""
          class="card-item__title--link"
        >
          {{ item.name }}
        </nuxt-link>
      </p>
    </div>

    <div
      class="card-item__intro"
    >
      <p
        v-if="item.intro"
        class="card-item__intro--content"
      >
        {{ item.intro }}
      </p>
    </div>

    <div class="card-item__settings card-settings">
      <div class="card-settings__content">
        <p class="card-settings__rate">
          {{ item.rating }}
        </p>
        <p class="card-settings__reviews">
          {{ `${item.reviews} ${reviewText(item.reviews)}` }}
        </p>
        <p class="card-settings__type">
          {{ item.type }}
        </p>
        <div
          v-if="item.views"
          class="card-settings__views"
          :class="{ 'view-more': viewWidth > 100 }"
        >
          <p
            ref="views"
            class="card-settings__views--content"
          >
            {{ `${item.views.toLocaleString()} ${viewText(item.views)}` }}
          </p>
        </div>
      </div>
    </div>

    <OcButton
      class="card-item__button-like"
      name="transparent"
      icon="heart"
      add-class="heart"
      :active="isLiked"
      @click.stop.prevent="$emit('setLike', item.id)"
    >
      Поставить лайк
    </OcButton>

    <div
      class="card-item__address"
      :class="{ 'address-more': addressWidth > widthContainer }"
    >
      <p
        ref="addressCt"
        class="card-item__address--content"
      >
        {{ item.address }}
      </p>
    </div>

    <div
      v-if="type === 'housing'"
      class="card-item__attrs"
      :class="{ 'more-attrs': attrsHeight > 40 }"
    >
      <ul
        ref="attrs"
        class="card-item__attrs--list"
      >
        <li
          v-for="attr in attrs"
          :key="attr"
          class="card-item__attr"
        >
          {{ attr }}
        </li>
      </ul>
    </div>

    <p class="card-item__price-container">
      <span
        v-if="item.oldprice"
        class="card-item__old-price"
      >
        {{ item.oldprice.toLocaleString() }}
        <span class="card-item__old-price--rouble">
          9
        </span>
      </span>
      <span class="card-item__price">от {{ item.price.toLocaleString() }}
        <span class="card-item__price--rouble">
          9
        </span>
      </span>
      <span class="card-item__type-price">{{ item.typePrice }}</span>
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
