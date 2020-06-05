<template>
  <div class="loc__box">
    <p class="loc__h">
      Расположение
    </p>

    <div class="loc__flex">
      <span
        v-for="(place, index) in location"
        :key="index"
      >
        <a
          href="#"
          class="loc__a"
        >
          {{ place }}
        </a>

        <span
          v-if="location.length - 1 > index"
          class="loc__span"
        >, </span>
      </span>
    </div>

    <yandex-map
      :coords="coords"
      class="loc__yandex-map-content"
      @map-was-initialized="initMap"
    >
      <ymap-marker
        marker-id="1"
        :coords="coords"
        :icon="markerIcon"
      />
    </yandex-map>

    <p class="loc__desc">
      {{ locDesc }}
    </p>

    <p class="loc__read-more">
      Читать далее
    </p>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
