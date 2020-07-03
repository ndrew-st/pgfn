<template>
  <input
    v-model="locValue"
    class="ap-input"
    @input="$emit('input', locValue)"
  >
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
