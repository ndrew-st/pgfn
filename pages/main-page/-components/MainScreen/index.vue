<template>
  <div class="main-screen">
    <div class="main-screen__slider">
      <OcImg
        src="main-background.jpg"
        />
    </div>
    <div class="main-screen__maps">
      <yandex-map
        :coords="[45.389194, 33.993751]"
        zoom="7"
        ymap-class="main-screen__maps_yandex"
      ></yandex-map>
      <div class="main-screen__maps_info">
        <p>Крым на карте</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.main-screen
  width 100%
  height 100vh
  display flex
  padding-top 56px

  &__slider
    flex 3 1 auto

  &__maps
    min-width 300px
    position relative
    flex 2 1 auto

    &_info
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background rgba(0,0,0,.7)
      color white

    &_yandex
      width 100%
      height 100vh
</style>
