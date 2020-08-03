<template>
  <div class="habitation-map">
    <Address
      :content="content"
    />
    <OcMaps
      v-if="content"
      class="habitation-map__content"
      type-icon="home"
      :coords="coords"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
