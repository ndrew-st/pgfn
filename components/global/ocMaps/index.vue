<template>
  <no-ssr>
    <yandex-map
      :coords="centerMap"
      :zoom="zoom"
      class="map__content"
    >
      <template v-if="isArrayCoords">
        <ymap-marker
          v-for="(item, index) in coords"
          :key="index"
          :coords="getCoords(item)"
          :marker-id="index"
        />
      </template>
      <template v-else>
        <ymap-marker
          :icon="typeIcon === 'home' ? icon : {}"
          :coords="getCoords(coords)"
          :marker-id="coords.lat + coords.lon"
        />
      </template>
    </yandex-map>
  </no-ssr>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
