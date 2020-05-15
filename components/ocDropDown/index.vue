<template>
  <div class="dropdown">
    <span
      class="dropdown__btn"
      @click="toggle"
    >
      <slot
        :show="isShow"
        name="button"
      />
    </span>
    <transition name="fade">
      <div
        v-if="isShow"
        class="dropdown__content"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
