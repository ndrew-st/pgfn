<template>
  <div class="full-block">
    <div class="full-block__container">
      <h2 class="full-block__title">Путеводитель по твоим правилам</h2>
      <p class="full-block__description">Полуостров Крым — это уникальная природа, горы, древние города и императорские дворцы. Редакция портала «Культура.РФ» подготовила культурный гид по главным достопримечательностям Крыма.</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.full-block
  margin-bottom 50px
  padding 0 18px
  padding-top 32px

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

    &:before
      content ''

      position absolute
      left 0
      right 0
      bottom -350px

      width 2400px
      height 1600px
      margin 0 auto

      background url('/main-page/full-bg.jpg') 0 0 no-repeat
      background-size 2400px 1600px

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
