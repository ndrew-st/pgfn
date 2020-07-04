<template>
  <div>
    <button
      :class="['ap-folding__btn', {'ap-folding__btn--open': !fold}, {'ap-folding__btn--close': fold}]"
      @click="fold = !fold"
    >
      {{ caption }}
      <span class="add-placement__red-star">*</span>
    </button>

    <slot v-if="!fold" />
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
