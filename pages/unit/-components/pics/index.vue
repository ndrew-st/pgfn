<template>
  <div class="pics">
    <div
      class="pics__carousel pics-carousel"
      :class="[{ 'one-image': images.length < 5 }]"
    >
      <Popup
        :length="images.length"
        :show-popup="showPopup"
        :active-index="activeIndex"
        @toggle="toggleShow"
      >
        <OcCarousel
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
            :key="img"
            class="pics-carousel__img-container carousel-img-container"
          >
            <div class="carousel-img-container__wrapper">
              <OcZoomer
                class="pics-carousel__zoomer carousel-zoomer"
                :max-scale="10"
                :off="!showPopup"
                :zoomed.sync="zoomed"
                :active="showPopup"
                @swipe="changeSwipe"
              >
                <div
                  class="pics-carousel__img-wrapper"
                  @click="toggleShow(true)"
                >
                  <OcImg
                    :id="img"
                    :type-size="typeSize"
                    :alt="img"
                    class="pics-carousel__img"
                  />
                </div>
              </OcZoomer>
            </div>
            <p
              v-if="img && img.description"
              class="pics-carousel__img-description carousel-img-description"
            >
              {{ img.description }}
            </p>
          </div>
        </OcCarousel>
      </Popup>
      <span
        v-if="!showPopup"
        class="pics-carousel__counter"
      >{{ activeIndex + 1 }}/{{ images.length }}</span>
    </div>

    <div
      v-if="images.length > 4"
      class="pics__vertical pics-vertical"
    >
      <OcCarousel
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
          :key="img"
          class="pics-vertical__img-container"
          @click="changeActiveCarousel(index)"
        >
          <OcImg
            :id="img"
            type-size="thumbnail"
            :alt="img"
            class="pics-vertical__img"
          />
        </div>
      </OcCarousel>
    </div>

    <div
      v-if="images.length > 1"
      class="pics__button-container"
    >
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
