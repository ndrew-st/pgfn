<template>
  <div class="mobile-menu__wrapper">
    <div class="mobile-menu">
      <div class="mobile-menu__title">
        <div
          @click="switchActive(false)"
          class="mobile-menu__close-btn"
        ></div>

        <OcImg src="oc-logo-2.png" />

        <div class="main-panel__logo_title">
          OurCrimea<span>.com</span>
        </div>
      </div>

      <OcMainMenu
        menuType="full"
        :menuItems="fullMenu"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import OcMainMenu from '@/components/ocMainMenu'

export default {
  components: {
    OcMainMenu
  },
  computed: {
    ...mapGetters('main-menu', ['fullMenu', 'smallMenu'])
  },
  methods: {
    ...mapMutations('main-menu', ['switchActive'])
  }
}
</script>

<style lang="stylus">
.mobile-menu
  max-width 300px
  height 100%
  background white

  @media screen and (max-width 768px)
    max-width unset
    width 100%

  &__close-btn
    cursor pointer
    width 40px
    height 40px
    position relative
    margin-right 20px

    &::after, &::before
      position absolute
      display block
      content ""
      height 4px
      width 40px
      background white
      top 50%

    &::after
      transform rotate(45deg)

    &::before
      transform rotate(-45deg)

  &__wrapper
    position fixed
    top 0
    left 0
    height 100vh
    width 100vw
    background rgba(0,0,0,.4)

  &__title
    background $violete
    display flex
    padding 15px 15px
    align-items center

    & img
      max-width 42px
</style>
