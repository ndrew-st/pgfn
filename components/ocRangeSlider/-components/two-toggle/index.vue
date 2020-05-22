<template>
  <div
    class="slider"
  >
    <div
      ref="slider"
      class="slider__content"
    >
      <button
        ref="leftControl"
        type="button"
        class="slider__toggle slider__toggle--left"
        @mousemove="handlerMove('mouse', 'left', $event)"
        @mousedown="handlerStart('mouse','left', $event)"
        @touchstart="handlerStart('touch', 'left', $event)"
        @touchmove="handlerMove('touch', 'left', $event)"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        @mouseup="mouseUp"
        @dragstart.prevent="_handlerDragStart"
      >
        <OcIcon
          class="slider__toggle--icon"
          name="rangeButton"
        />
        toggle
        <span
          v-if="showDescription"
          ref="leftRes"
          class="slider__toggle--res"
        >{{ `${leftRes} ${type}` }}</span>
      </button>
      <span
        :style="{ 'left': leftPosLine + 31 + 'px', 'right': rightPosLine + 'px', 'width': lineWidth + 'px' }"
        class="slider__content--line"
      />
      <button
        ref="rightControl"
        type="button"
        class="slider__toggle slider__toggle--right"
        @mousemove="handlerMove('mouse', 'right', $event)"
        @mousedown="handlerStart('mouse','right', $event)"
        @touchstart="handlerStart('touch', 'right', $event)"
        @touchmove="handlerMove('touch', 'right', $event)"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        @mouseup="mouseUp"
        @dragstart.prevent="_handlerDragStart"
      >
        <OcIcon
          class="slider__toggle--icon"
          name="rangeButton"
        />
        toggle
        <span
          v-if="showDescription"
          ref="rightRes"
          class="slider__toggle--res"
        >{{ `${rightRes} ${type}` }}</span>
      </button>
    </div>
  </div>
</template>

<script src="./index.js" />
<style lang="stylus" src="./index.styl" scoped/>
