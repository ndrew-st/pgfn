<template>
  <div class="mobile-menu__wrapper">
    <div class="mobile-menu">
      <div class="mobile-menu__title">
        <div
          @click="switchActive(false)"
          class="close-btn__wrapper">
            <OcIcon
              icon="times"
              class="mobile-menu__close-btn"
            />
        </div>

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
  max-width 250px
  height 100%
  background white

  @media screen and (max-width 768px)
    max-width unset
    width 100%

  &__close-btn
    cursor pointer
    color white
    position relative
    margin-right 22px
    font-size 18px

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
    align-items center
    height 56px

    & img
      max-width 26px

.close-btn__wrapper
  padding-left 27px
  width 18px
  margin-right 22px
  display flex
</style>
