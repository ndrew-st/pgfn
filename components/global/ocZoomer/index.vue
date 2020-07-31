<template>
  <div
    class="vue-zoomer"
    :style="{backgroundColor: backgroundColor}"
    @mousewheel="onMouseWheel"
    @DOMMouseScroll="onMouseWheel"
    @mousedown="onMouseDown"
    @mouseout="setPointerPosCenter"
    @mouseup="onMouseUp"
    @mousemove.stop.prevent="onMouseMove"
    @touchstart.stop="onTouchStart"
    @touchend.stop="onTouchEnd"
    @touchmove.stop="onTouchMove"
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
