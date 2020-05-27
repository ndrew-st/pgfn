<template>
  <div class="full-block">
    <img
      :alt="title"
      :src="background"
      width="2400"
      height="1600"
      class="full-block__bg-image"
    >
    <div class="full-block__container">
      <h2 class="full-block__title">
        {{ title }}
      </h2>
      <p
        class="full-block__description"
        v-html="description"
      />
      <FeaturePlace

        class="full-block__features"
        :temperature="features.temp"
        :water-temperature="features.waterTemp"
        :count="features.current"
      />
    </div>
  </div>
</template>

<script>
import FeaturePlace from '~/components/blocks/FeaturePlace'

import isEmptyObject from '~/utils/isEmptyObject'

export default {
  components: { FeaturePlace },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    description: {
      type: String,
      required: true,
      default: 'description'
    },
    background: {
      type: String,
      required: true,
      default: 'background'
    },
    features: {
      type: Object,
      default: () => ({
        temp: 12,
        waterTemp: 2345,
        current: 45245
      })
    }
  },
  methods: {
    isEmptyObj (obj) {
      return isEmptyObject(obj)
    }
  }
}
</script>

<style lang="stylus" scoped>
.full-block
  margin-bottom 50px
  padding 0 18px
  padding-top 32px

  text-align: center;

  &__features
    display none
    margin-top 20px

  @media (min-width 768px)
    padding 0 40px

  &__bg-image
    display none

  &__container
    max-width 520px
    margin 0 auto

  &__title
    margin 0
    margin-bottom 20px

    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #272528;

    @media(min-width 520px)
      text-align center

  &__description
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #989BA8;

    @media(min-width 520px)
      text-align center

@media(min-width 1280px)
  .full-block
    position relative

    min-height 506px
    padding-top 240px
    margin-bottom 0
    padding-bottom 140px

    box-sizing border-box
    overflow hidden

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 27.17%, rgba(0, 0, 0, 0.11) 38.21%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.55) 99.87%);

    &__features
      display inline-flex

    &__bg-image
      position absolute
      top -90%
      left 0
      right 0
      bottom 0

      display block
      margin auto
      width 2400px
      min-height 1600px

      z-index -1

    &__container
      max-width 705px

    &__title
      font-size: 40px;
      font-weight: bold;
      line-height: 24px;
      color white

    &__description
      display block
      max-width 520px
      margin 0 auto

      font-size: 16px;
      line-height: 24px;
      color white

</style>
