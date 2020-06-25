<template>
  <div class="map">
    <h2
      v-if="label"
      class="map__title"
    >
      {{ label }}
    </h2>

    <yandex-map
      :coords="markerCoords"
      zoom="7"
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
