<template>
  <div>
    <label>
      <input
        class="ap-radio__input"
        type="radio"
        :checked="checked"
        @change="$emit('change', value)"
        @click.stop
      >
      <span class="ap-radio__label">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
