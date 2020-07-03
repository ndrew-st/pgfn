<template>
  <div>
    <input
      :id="$attrs.id"
      class="ap-radio__input"
      type="radio"
      :checked="checked"
      @change="$emit('change', value)"
    >

    <label
      :for="$attrs.id"
      class="ap-radio__label"
    >
      {{ label }}

    </label>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
