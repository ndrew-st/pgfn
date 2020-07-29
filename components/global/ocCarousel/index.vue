<template>
  <div
    ref="carousel"
    class="carousel"
  >
    <div
      v-show="horizontal && !vertical"
      class="carousel__horizontal"
    >
      <div class="carousel__wrapper-container">
        <div
          ref="wrapper"
          :style="{ 'max-width': maxWidthWrapper + 'px', 'overflow-x': scroll ? 'scroll' : 'hidden' }"
          :class="{ hide: !show, 'show-desktop': autoWidth, 'show-scroll': scroll }"
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
        v-show="nav && isShowButtons"
        class="carousel__button-container btn-carousel"
      >
        <OcButton
          v-if="items.length"
          class="btn-carousel__prev"
          add-class="prev"
          name="carousel"
          icon="arrow"
          @click="carouselPrev"
        >
          prev
        </OcButton>
        <OcButton
          v-if="items.length"
          class="btn-carousel__next"
          add-class="next"
          icon="arrow"
          name="carousel"
          @click="carouselNext"
        >
          next
        </OcButton>
      </div>

      <div
        v-show="dots && length > 1"
        class="carousel__dots-container"
      >
        <ul
          ref="dots"
          :style="{ 'transform': `translateX(-${posDots}px)` }"
          class="carousel__dots"
        >
          <li
            v-for="i in items.length"
            :key="i"
            class="carousel__dot"
            :class="{
              'centered': isCentered(i - 1),
              'size-small': isSmall(i - 1)}"
          >
            <span
              :class="{ 'active-dot': i - 1 === activeIndex,
                        convex: isConvex(i - 1),
                        'size-small': isSmall(i - 1) }"
              class="carousel__dot--item"
            >
              {{ i }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-show="vertical && !horizontal"
      class="carousel__vertical carousel-vertical"
    >
      <div
        class="carousel-vertical__wrapper"
        :style="{ 'max-height': maxHeightWrapper + 'px'}"
      >
        <div
          ref="listHeight"
          :key="date"
          class="carousel-vertical__list"
          :style="{ 'top': - posY + 'px' }"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
