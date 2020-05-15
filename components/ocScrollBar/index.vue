<template>
  <div
    ref="scrollWrapper"
    :class="'vue-scrollbar__wrapper' + ( this.classes ? ' ' + this.classes : '' )"
    :style="this.styles"
    @click="calculateSize"
  >
    <div
      ref="scrollArea"
      :class="'vue-scrollbar__area' + ( this.dragging ? ' ' : ' vue-scrollbar-transition')"
      :style="{
        marginTop: this.top * -1 +'px',
        marginLeft: this.left * -1 +'px'
      }"
      @wheel="scroll"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="stopDrag"
    >
      <slot />

      <vertical-scrollbar
        v-if="ready"
        :area="{ height: scrollAreaHeight }"
        :wrapper="{ height: scrollWrapperHeight }"
        :scrolling="vMovement"
        :dragging-from-parent="dragging"
        :on-change-position="handleChangePosition"
        :on-dragging="handleScrollbarDragging"
        :on-stop-drag="handleScrollbarStopDrag"
      />

      <horizontal-scrollbar
        v-if="ready"
        :area="{ width: scrollAreaWidth }"
        :wrapper="{ width: scrollWrapperWidth }"
        :scrolling="hMovement"
        :dragging-from-parent="dragging"
        :on-change-position="handleChangePosition"
        :on-dragging="handleScrollbarDragging"
        :on-stop-drag="handleScrollbarStopDrag"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
