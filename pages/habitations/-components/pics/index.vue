<template>
  <div class="pics">
    <div class="pics__carousel pics-carousel">
      <Popup
        :length="images.length"
        :show-popup="showPopup"
        :active-index="activeIndex"
        @toggle="toggleShow"
      >
        <ocCarousel
          :dots="true"
          :items="images"
          :column="1"
          :horizontal="true"
          :active-item="activeIndex"
          :nav="true"
          @updateIndex="updateIndex"
        >
          <div
            v-for="img in images"
            :key="img.id"
            class="pics-carousel__img-container carousel-img-container"
          >
            <div class="carousel-img-container__wrapper">
              <ocZoomer
                class="pics-carousel__zoomer carousel-zoomer"
                :max-scale="10"
                :off="!showPopup"
                :zoomed.sync="zoomed"
                @swipe="changeSwipe"
              >
                <div
                  class="pics-carousel__img-wrapper"
                  @click="toggleShow(true)"
                >
                  <img
                    :data-url="img.url"
                    :alt="img.description"
                    class="pics-carousel__img"
                  >
                </div>
              </ocZoomer>
            </div>
            <p class="pics-carousel__img-description carousel-img-description">
              {{ img.description }}
            </p>
          </div>
        </ocCarousel>
      </Popup>
      <span
        v-if="!showPopup"
        class="pics-carousel__counter"
      >{{ activeIndex + 1 }}/{{ images.length }}</span>
    </div>

    <div class="pics__vertical pics-vertical">
      <ocCarousel
        :dots="true"
        :items="images"
        :column="2"
        :horizontal="false"
        :vertical="true"
        :active-item="activeIndex"
        :nav="true"
        @updateIndex="updateIndex"
      >
        <div
          v-for="(img, index) in images"
          :key="img.id"
          class="pics-vertical__img-container"
          @click="changeActiveCarousel(index)"
        >
          <img
            v-lazy
            :data-url="img.url"
            :alt="img.description"
            class="pics-vertical__img"
          >
        </div>
      </ocCarousel>
    </div>

    <div class="pics__button-container">
      <OcButton
        name="border"
        @click="toggleShow(true)"
      >
        Фотогалерея
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
