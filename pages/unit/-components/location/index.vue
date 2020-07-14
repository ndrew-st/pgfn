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

    <p
      v-if="locDesc"
      class="loc__desc"
    >
      {{ readMoreActive ? locDescLong : locDesc }}
    </p>

    <p
      v-if="locDesc"
      class="loc__read-more"
      @click="readMoreActive = !readMoreActive"
    >
      {{ !readMoreActive ? 'Читать далее' : 'Свернуть' }}
    </p>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
