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
        :items="arrImages"
        class="card-item__swiper"
      >
        <div
          v-for="(gallery, index) in arrImages"
          :key="index"
          class="card-item__img-container"
          @click="goTo(`/habitation/${item._id}`)"
        >
          <OcImg
            :id="gallery"
            :alt="gallery"
            class="card-item__image"
          />
        </div>
      </OcCarousel>
    </div>

    <div
      class="card-item__settings card-settings"
      @click="goTo(`/habitation/${item._id}`)"
    >
      <div class="card-settings__content">
        <p class="card-settings__type">
          {{ typeHouse[parseInt(item.typeOfHousing)] }}
        </p>
        <p class="card-settings__rate">
          {{ item.rating || '4.0' }}
        </p>
        <!--        <p-->
        <!--          v-if="item.reviews"-->
        <!--          class="card-settings__reviews"-->
        <!--        >-->
        <!--          {{ `${item.reviews} ${reviewText(item.reviews)}` }}-->
        <!--        </p>-->

        <!--        <div-->
        <!--          v-show="item.views"-->
        <!--          class="card-settings__views"-->
        <!--          :class="{ 'view-more': viewWidth > 100 }"-->
        <!--        >-->
        <!--          <p-->
        <!--            ref="views"-->
        <!--            class="card-settings__views&#45;&#45;content"-->
        <!--          >-->
        <!--            {{ `${item.views && item.views.toLocaleString()} ${viewText(item.views)}` }}-->
        <!--          </p>-->
        <!--        </div>-->
      </div>
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
          {{ title }}
        </OcLink>
      </p>
    </div>

    <!--    <div class="card-item__intro">-->
    <!--      <p-->
    <!--        v-show="item.title"-->
    <!--        class="card-item__intro&#45;&#45;content"-->
    <!--      >-->
    <!--        {{ item.title }}-->
    <!--      </p>-->
    <!--    </div>-->

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
      class="card-item__address card-address"
      :class="{ 'address-more': addressWidth > widthContainer }"
    >
      <ul
        ref="addressCt"
        class="card-address__list card-list"
      >
        <li
          v-for="(item, index) in adrs"
          :key="index"
          class="card-address__item"
        >
          <nuxt-link
            class="card-address__link card-link"
            :to="`direction/${item}`"
          >
            {{ item }}
          </nuxt-link>
          <span v-if="index < adrs.length - 1">,&nbsp;</span>
        </li>
      </ul>
    </div>

    <!--    <div-->
    <!--      v-show="type === 'housing'"-->
    <!--      class="card-item__attrs"-->
    <!--      :class="{ 'more-attrs': attrsHeight > 40 }"-->
    <!--    >-->
    <!--      <ul-->
    <!--        ref="attrs"-->
    <!--        class="card-item__attrs&#45;&#45;list"-->
    <!--      >-->
    <!--        <li-->
    <!--          v-if="countGuests"-->
    <!--          class="card-item__attr"-->
    <!--        >-->
    <!--          {{ countGuests }}-->
    <!--        </li>-->
    <!--        <li-->
    <!--          v-if="countBeds"-->
    <!--          class="card-item__attr"-->
    <!--        >-->
    <!--          {{ countBeds }}-->
    <!--        </li>-->
    <!--        <li-->
    <!--          v-if="bedsRoom"-->
    <!--          class="card-item__attr"-->
    <!--        >-->
    <!--          {{ bedsRoom }}-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->

    <div class="card-item__price-container card-price">
      <!--      <span-->
      <!--        v-if="item.oldprice"-->
      <!--        class="card-item__old-price"-->
      <!--      >-->
      <!--        {{ item.oldprice && item.oldprice.toLocaleString() }}-->
      <!--        <span class="card-item__old-price&#45;&#45;rouble">-->
      <!--          9-->
      <!--        </span>-->
      <!--      </span>-->
      <div class="card-price__container">
        <span class="card-item__price">от {{ item.price.byTheDay[0] ? item.price.byTheDay[0].price : item.price.longTerm[0] && item.price.longTerm[0].price }}
          <span class="card-item__price--rouble">
            9
          </span>
        </span>
        <!--      <span class="card-item__type-price">{{ item.typePrice }}</span>-->
        <span class="card-item__type-price">{{ item.price.byTheDay[0] ? 'за сутки' : 'за месяц' }}</span>
      </div>

      <div
        v-if="isShowMorePrice"
        class="card-price__more card-price-more"
      >
        <button
          type="button"
          :class="[{'active': showPrice}]"
          class="card-price-more__button"
          @click="showPrice = !showPrice"
        >
          hover me
        </button>

        <MoreBlock
          v-if="showPrice"
          :content="item.price"
          class="card-price-more__content card-price-content"
        />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
