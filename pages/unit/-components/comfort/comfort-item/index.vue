<template>
  <div class="comfort-item">
    <div class="comfort-item__img-container">
      <img
        :src="facil[item.value]"
        :alt="item.label"
        class="comfort-item__img"
      >
    </div>

    <p class="comfort-item__name">
      {{ item.label }}
    </p>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus" />
