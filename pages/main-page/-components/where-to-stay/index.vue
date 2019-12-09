<template>
  <div class="where-to-stay">
    <h2 class="where-to-stay__header">
      Где остановиться?
    </h2>

    <div class="where-to-stay__housing">
      <h4>Жилье целиком</h4>
      <div class="where-to-stay__list">
        <StayItem
          v-for="(item, index) of housing"
          :key="index"
          :item="item"
        />
      </div>
    </div>

    <div class="where-to-stay__hotel">
      <h4>Гостиничное размещение</h4>
      <div class="where-to-stay__list">
        <StayItem
          v-for="(item, index) of hotel"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
