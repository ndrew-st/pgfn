<template>
  <span class="container">
    <img
      v-lazy
      class="container__image"
      :data-url="src"
      :width="width"
      :height="height"
      :alt="alt"
    >
  </span>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
