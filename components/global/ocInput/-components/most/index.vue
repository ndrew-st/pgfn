<template>
  <label
    class="label"
    :class="name"
  >
    <span
      v-if="label.length"
      class="label__text"
    >{{ label }}</span>

    :value="value"
    v-bind="$attrs"
    class="label__content"
    :class="{ 'error': error.length }"
    v-on="$listeners"
    >
  </label>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
