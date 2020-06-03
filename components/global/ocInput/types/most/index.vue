<template>
  <label
    class="label"
    :class="name"
  >
    <span
      v-if="label.length"
      class="label__text"
    >{{ label }}</span>
    <input
      :value="value"
      v-bind="$attrs"
      class="label__content"
      @input="$emit('input', $event.target.value)"
      @keydown="$emit('keyDown', $event)"
    >
  </label>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
