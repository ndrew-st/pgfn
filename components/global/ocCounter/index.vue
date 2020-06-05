<template>
  <div class="counter">
    <div class="counter__title-container">
      <h4 class="counter__title">
        {{ title }}
      </h4>
      <span
        v-if="subTitle"
        class="counter__sub-title"
      >{{ subTitle }}</span>
    </div>

    <div class="counter__content">
      <div
        :class="{ disabled: cur === 0 }"
        class="counter__button counter__button--left"
        @click.stop="changeCount(false)"
      >
        Меньше
      </div>
      <span class="counter__current">{{ cur }}+</span>
      <div
        class="counter__button counter__button--right"
        @click.stop="changeCount(true)"
      >
        Больше
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
