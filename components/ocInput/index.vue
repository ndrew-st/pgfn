<template>
  <div
    class="input-wrapper"
    :class="additionalClass"
  >
    <label v-if="label">{{label}}</label>
    <OcIcon
      v-if="visibleIcon && rightIcon"
      class="input-wrapper__fixed-icon input-wrapper__icon-right"
      :icon="icon"
    />

    <input
      v-bind="$attrs"
      :type="type"
    />

    <OcIcon
      v-if="visibleIcon && leftIcon"
      class="input-wrapper__fixed-icon input-wrapper__icon-left"
      :icon="icon" />
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
