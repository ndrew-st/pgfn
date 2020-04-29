<template>
  <div>
    <div
      v-for="(slide, index) in swiperInfo.list"
      :key="slide"
    >
      <transition name="fade">
        <img
          v-show="index === activeIndex"
          class="swiper"
          :src="slide"
        >
      </transition>
    </div>

    <div
      class="arrow-box__left"
      @click="leftList"
    >
      <div class="arrow-box__left__inner">
        <svg
          class="arrow-box__left__inner__svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 300 186.262"
          enable-background="new 0 0 300 186.262"
          xml:space="preserve"
          style="fill: rgb(0, 0, 0);"
        >
          <g id="__id386_sixooxn8n">
            <polygon
              points="0,37.608 150.629,186.261 300,37.549 262.721,0.045 150.501,111.778 37.189,0  "
              style="fill: rgb(166, 166, 166);"
            />
          </g>
        </svg>
      </div>
    </div>

    <div
      class="arrow-box__right"
      @click="rightList"
    >
      <div class="arrow-box__right__inner">
        <svg
          class="arrow-box__right__inner__svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 300 186.262"
          enable-background="new 0 0 300 186.262"
          xml:space="preserve"
          style="fill: rgb(0, 0, 0);"
        >
          <g id="__id386_sixooxn8n">
            <polygon
              points="0,37.608 150.629,186.261 300,37.549 262.721,0.045 150.501,111.778 37.189,0  "
              style="fill: rgb(166, 166, 166);"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.styl" lang="stylus" scoped></style>
