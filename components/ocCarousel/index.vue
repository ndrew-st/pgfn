<template>
  <div
    ref="carousel"
    @mouseover="mouseOver"
    @mouseout="mouseOut"
    class="carousel">
    <div
      :style="{ 'max-width': maxWidthWrapper + 'px' }"
      :class="{ hide: !show, 'show-desktop': autoWidth }"
      class="carousel__wrapper">
      <div
      ref="list"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      @mousewheel="mouseWheel"
      :style="{ 'transform': `translateX(${posX}px)` }"
      class="carousel__list">
        <slot/>
      </div>
    </div>

    <div
      v-if="nav"
      class="carousel__button-container btn-carousel">
      <button
          @click="carouselPrev"
          :class="{ 'disabled': activeIndex === 0 }"
          type="button"
          class="btn-carousel__prev">prev</button>
      <button
          @click="carouselNext"
          :class="{ 'disabled': activeIndex + countColumn >= items.length }"
          type="button"
          class="btn-carousel__next">next</button>
    </div>

    <div
      v-if="dots"
      class="carousel__dots-container">
      <ul class="carousel__dots">
        <li
          v-for="i in items.length"
          :key="i"
          class="carousel__dot">
          <button
            :class="{ 'active-dot': --i === activeIndex }"
            class="carousel__dot-button">{{i}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stulys" src="./index.styl"/>
