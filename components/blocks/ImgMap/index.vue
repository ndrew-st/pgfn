<template>
  <img
    v-lazy:[coords]
    :src="url"
    @loadImage="loadImage"
  >
</template>

<script src="./index.js" />
<style lang="stylus" src="./index.styl" scoped/>
