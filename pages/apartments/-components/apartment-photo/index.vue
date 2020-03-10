<template>
  <div class="apartment-photo">
    <div class="apartment-photo__left">
      <img
        class="apartment-photo__left-img"
        src="@/static/apartments/894753838.jpg"
      />
    </div>

    <div class="apartment-photo__right">
      <img
        class="apartment-photo__right-img"
        src="@/static/apartments/1399465201.jpg"
      />
      <div class="apartment-photo__maps">
        <yandex-map
          :coords="[45.009943, 35.118698]"
          zoom="12"
          ymap-class="apartment-photo__maps_yandex"
        ></yandex-map>
        <div class="apartment-photo__maps_info">
        <p>Крым, г. Судак, ул. Ленина, 9А — на карте</p>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">

.apartment-photo
  margin-top 56px
  display flex

  &__left
    width 60%

  &__left-img
    width 100%

  &__right
    width 40%

  &__right-img
    width 100%

  &__maps
    width 100%
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
      height 40vh
</style>
