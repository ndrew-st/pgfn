<template>
  <div class="comfort-item">
    <div class="comfort-item__img">
      <img :src="item.image">
    </div>

    <p class="comfort-item__name">
      {{ item.name }}
    </p>
  </div>
</template>

<script src="./index.js" />

<style src="./index.styl" lang="stylus" />
