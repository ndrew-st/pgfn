<template>
  <div>
    <input
      :id="$attrs.id"
      class="ap-radio__input"
      type="radio"
      :value="$attrs.value"
      :name="$attrs.name"
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
