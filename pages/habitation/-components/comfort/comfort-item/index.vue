<template>
  <div class="comfort-item">
    <img
      :src="item.image"
      :alt="item.label"
      class="comfort-item__img"
    >

    <p class="comfort-item__name">
      {{ item.label }}
    </p>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus" />
