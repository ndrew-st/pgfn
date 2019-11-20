<template>
  <div class="housing-options">
    <h2 class="housing-options__header">
      Варианты жилья в Крыму
    </h2>

    <div class="housing-options__hotel">
      <div class="housing-options__hotel_header">
        <h3>Лучшее гостиничное размещение</h3>

        <OcButton>Смотреть все</OcButton>
      </div>

      <div class="housing-options__hotel_list">

      </div>
    </div>

    <div class="housing-options__house">
      <div class="housing-options__house_header">
        <h3>Лучшее жилье целиком</h3>

        <OcButton>Смотреть все</OcButton>
      </div>

      <div class="housing-options__house_list"></div>
    </div>

    <div class="housing-options__fresh-offers">
      <div class="housing_options__fresh-offers__header">
        <h3>Свежие предложения</h3>

        <OcButton>Смотреть все</OcButton>
      </div>

      <div class="housing-options__fresh-offers_list"></div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
