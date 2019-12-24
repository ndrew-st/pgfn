<template>
  <div class="location-descriptor">
    <h2 class="location-descriptor__header">{{ title }}</h2>

    <p class="location-descriptor__desc">{{ description }}</p>

    <hr class="location-descriptor__separator" />

    <div class="location-descriptor__params">
      <div class="location-descriptor__column">
        <div class="location-descriptor__params_item">
          <span>Площадь: </span>
        </div>

        <div class="location-descriptor__params_item">
          <span>Население: </span>
        </div>

        <div class="location-descriptor__params_item">
          <span>Населенные пункты: </span>
        </div>

        <div class="location-descriptor__params_item">
          <span>Места для жилья: </span>
        </div>
      </div>

      <div class="location-descriptor__column">
        <div class="location-descriptor__params_item">
          <span>Местное время: </span>
        </div>

        <div class="location-descriptor__params_item">
          <span>Погода: </span>0
        </div>

        <div class="location-descriptor__params_item">
          <span>Публичные места: </span>0
        </div>

        <div class="location-descriptor__params_item">
          <span>Услуги и развлечения: </span>0
        </div>
      </div>
    </div>
    <hr class="location-descriptor__separator" />
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>

<style lang="stylus">
.location-descriptor
  display flex
  flex-direction column
  padding 22px

  &__separator
    width 100%
    border .5px solid $gray-3

  &__params
    display flex
    flex-direction row

    &_item
      color $gray-2

      & span
        color $gray-3

  &__column
    display flex
    flex-direction column
    flex 1
</style>
