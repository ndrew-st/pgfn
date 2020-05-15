<template>
  <div
    ref="carousel"
    class="carousel"
  >
    <div class="carousel__wrapper-container">
      <div
        ref="wrapper"
        :style="{ 'max-width': maxWidthWrapper || 1280 + 'px', 'overflow-x': scroll ? 'scroll' : 'hidden' }"
        :class="{ hide: !show, 'show-desktop': autoWidth}"
        class="carousel__wrapper"
        @scroll.passive="handlerScroll"
      >
        <div
          ref="list"
          class="carousel__list"
        >
          <slot />
        </div>
      </div>
    </div>

    <div
      v-if="nav"
      class="carousel__button-container btn-carousel"
    >
      <button
        :class="{ 'disabled': activeIndex < 1 }"
        type="button"
        class="btn-carousel__prev"
        @click="carouselPrev"
      >
        prev
      </button>

      <button
        :class="{ 'disabled': activeIndex + countColumn >= items.length }"
        type="button"
        class="btn-carousel__next"
        @click="carouselNext"
      >
        next
      </button>
    </div>

    <div
      v-if="dots"
      class="carousel__dots-container"
    >
      <ul
        ref="dots"
        :style="{ 'transform': `translateX(${posDots}px)` }"
        class="carousel__dots"
      >
        <li
          v-for="i in items.length"
          :key="i"
          class="carousel__dot"
        >
          <button
            :class="{ 'active-dot': --i === activeIndex,
                      convex: isConvex(i),
                      'size-small': isSmall(i) }"
            class="carousel__dot-button"
          >
            {{ i }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
