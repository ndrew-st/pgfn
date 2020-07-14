<template>
  <div
    ref="card"
    class="card-item"
    @mouseenter="mouseEnter"
    @touchstart="touchStart"
  >
    <div class="card-item__list">
      <OcCarousel
        :nav="true"
        :column="1"
        :dots="true"
        :show="true"
        :scroll="false"
        :items="item.images"
        class="card-item__swiper"
      >
        <div
          v-for="(gallery, index) in item.images"
          :key="index"
          class="card-item__img-container"
        >
          <OcImg
            :src="gallery"
            :alt="gallery"
            class="card-item__image"
          />
        </div>
      </OcCarousel>
    </div>

    <div
      class="card-item__title"
      :class="{ 'title-more': titleWidth > widthContainer }"
    >
      <p
        ref="titleCt"
        class="card-item__title--link-cont"
      >
        <OcLink
          :to="`/habitation/${item._id}`"
          name="main-card-title"
        >
          {{ item.title }}
        </OcLink>
      </p>
    </div>

    <div class="card-item__intro">
      <p
        v-show="item.intro"
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
          {{ item.typeOfHousing }}
        </p>
        <div
          v-show="item.views"
          class="card-settings__views"
          :class="{ 'view-more': viewWidth > 100 }"
        >
          <p
            ref="views"
            class="card-settings__views--content"
          >
            {{ `${item.views && item.views.toLocaleString()} ${viewText(item.views)}` }}
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
        {{ adrs }}
      </p>
    </div>

    <div
      v-show="type === 'housing'"
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
      <!--      <span-->
      <!--        v-if="item.oldprice"-->
      <!--        class="card-item__old-price"-->
      <!--      >-->
      <!--        {{ item.oldprice && item.oldprice.toLocaleString() }}-->
      <!--        <span class="card-item__old-price&#45;&#45;rouble">-->
      <!--          9-->
      <!--        </span>-->
      <!--      </span>-->
      <span class="card-item__price">от {{ item.price.byTheDay[0] && item.price.byTheDay[0].price }}
        <span class="card-item__price--rouble">
          9
        </span>
      </span>
      <!--      <span class="card-item__type-price">{{ item.typePrice }}</span>-->
      <span class="card-item__type-price">за сутки</span>
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
