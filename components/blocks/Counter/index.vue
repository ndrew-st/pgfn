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
      <OcButton
        name="counter"
        icon="counter"
        class="counter__button"
        add-class="minus"
        :disabled="cur === 0"
        @click.stop="changeCount(false)"
      >
        Меньше
      </OcButton>

      <span class="counter__current">{{ cur }}+</span>

      <OcButton
        name="counter"
        icon="counter"
        add-class="plus"
        class="counter__button"
        @click.stop="changeCount(true)"
      >
        Больше
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
