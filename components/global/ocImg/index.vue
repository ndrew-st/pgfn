<template>
  <span class="container">
    <img
      v-lazy:[id]
      class="container__image"
      :data-url="src"
      :width="width"
      :height="height"
      :alt="alt"
      :src="url"
      @loadImage="loadImage"
    >
  </span>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
