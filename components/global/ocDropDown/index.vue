<template>
  <div class="dropdown">
    <span
      class="dropdown__btn"
      @click.stop.prevent="toggle"
    >
      <slot
        :show="isShow"
        name="button"
      />
    </span>

    <transition
      v-if="!show"
      name="fade"
    >
      <div
        v-if="isShow"
        class="dropdown__content"
      >
        <slot name="body" />
      </div>
    </transition>
    <transition
      v-else
      name="fade"
    >
      <div
        v-show="isShow"
        class="dropdown__content"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
