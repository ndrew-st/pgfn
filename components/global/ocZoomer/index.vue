<template>
  <div
    class="vue-zoomer"
    :style="{backgroundColor: backgroundColor}"
    @mousewheel.prevent="onMouseWheel"
    @DOMMouseScroll="onMouseWheel"
    @mousedown.stop.prevent="onMouseDown"
    @mouseup.stop.prevent="onMouseUp"
    @mousemove.stop.prevent="onMouseMove"
    @mouseout.stop="setPointerPosCenter"
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
