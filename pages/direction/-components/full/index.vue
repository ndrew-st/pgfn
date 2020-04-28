<template>
  <div class="full-block">
    <img
      :alt="title"
      :src="background"
      width="2400"
      height="1600"
      class="full-block__bg-image">
    <div class="full-block__container">
      <h2 class="full-block__title">{{ title }}</h2>
      <p class="full-block__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.full-block
  margin-bottom 50px
  padding 0 18px
  padding-top 32px

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
