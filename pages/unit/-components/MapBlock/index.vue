<template>
  <div class="habitation-map">
    <Address
      :content="content"
    />
    <OcMaps
      class="habitation-map__content"
      :coords="content.coords"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
