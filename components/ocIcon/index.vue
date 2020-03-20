<template>
  <i
    v-if="type === 'fontawesome'"
    class="oc-icon"
    :class="iconClass"
  />
  <img
    v-else
    class="oc-icon"
    :src="iconImage"
  >
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
