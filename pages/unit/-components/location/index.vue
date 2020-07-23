<template>
  <div class="loc__box">
    <p class="loc__h">
      Расположение
    </p>

    <Address
      :content="address"
    />

    <OcMaps
      v-if="coords"
      class="loc__yandex-map-content"
      :coords="coords"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
