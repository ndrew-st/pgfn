<template>
  <i
    v-if="type === 'fontawesome'"
    class="oc-icon"
    :class="iconClass"
    class="oc-icon"
  />
  <OcImg
    v-else
    class="oc-icon"
    :src="iconImage"
  />
</template>

<script src="./index.js"></script>
<style lang="stylus" src="./index.styl"></style>
