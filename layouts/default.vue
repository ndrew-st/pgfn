<template>
  <div>
    <!-- <OcMainPanel /> -->
    <nuxt class="main__content" />
  </div>
</template>

<script>
import OcMainPanel from '@/components/ocMainPanel/index.vue'

export default {
  components: {
    OcMainPanel
  }
}
</script>

<style lang="stylus">
.main__wrapper
  display flex
  flex-direction row
  margin-top 60px

.main__content
  flex 1

.main-menu_big
  display none
  max-width 300px
  box-shadow 0 0 20px 0 $gray-2

  @media screen and (min-width 1280px)
    display flex

.main-menu_middle
  display none
  box-shadow 0 0 20px 0 $gray-2

  @media screen and (min-width 600px) and (max-width 1279px)
    display flex

.service-list, .help-list, .copyright
  padding 0px 20px 10px 20px

.copyright
  color $gray-2
</style>
