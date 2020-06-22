<template>
  <div class="map">
    <yandex-map
      :coords="markerCoords"
      :zoom="zoom"
      class="map__content"
      @map-was-initialized="initMap"
    >
      <ymap-marker
        :coords="markerCoords"
        marker-id="123"
      />
    </yandex-map>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
