<template>
  <div
    class="vue-zoomer"
    :style="{backgroundColor: backgroundColor}"
    @mousewheel.prevent="onMouseWheel"
    @DOMMouseScroll="onMouseWheel"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
    @mouseout="setPointerPosCenter"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchmove="onTouchMove"
  >
    <div
      class="zoomer"
      :style="wrapperStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" />
