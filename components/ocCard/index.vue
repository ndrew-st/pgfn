<template>
  <div class="oc-card">
    <div class="oc-card__image-wrapper">
      <OcImg :src="image" />
    </div>
    <div class="oc-card__params">
      <div class="oc-card__city">
        {{ type }} · {{ city }}
      </div>
      <div class="oc-card__name">
        {{ name }}
      </div>
      <div class="oc-card__price">
        {{ computedPrice }} ₽/ночь
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'name', 'image', 'city', 'price'],
  computed: {
    computedPrice () {
      return this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}
</script>

<styles lang="stylus" src="./index.styl"></styles>
