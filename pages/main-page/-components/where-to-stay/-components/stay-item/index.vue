<template>
  <div class="stay-item">
    <OcImg
      class="stay-item__image"
      :src="item.image"
    />
    <div class="stay-item__header">{{ item.name }}</div>
    <div class="stay-item__counter">{{ item.count }} {{ item.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.stay-item
  margin $size-1

  &:first-child
    margin-left 0

  &:last-child
    margin-right 0

  &__header
    font-weight bold

  &__image
    max-width 100%
</style>
