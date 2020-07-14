<template>
  <div>
    <label>
      <input
        class="ap-radio__input"
        type="radio"
        :checked="checked"
        @change="$emit('change', value)"
      >
      <span class="ap-radio__label">
        {{ label }}
      </span>
    </label>
    </labelclass="ap-radio__label">
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
