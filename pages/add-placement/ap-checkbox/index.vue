<template>
  <label class="ap-checkbox">
    <input
      v-model="locChecked"
      class="ap-checkbox__input"
      type="checkbox"
      @change="change()"
    >

    <span class="ap-checkbox__label-text">
      <slot />
    </span>
  </label>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
