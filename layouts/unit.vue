<template>
  <div class="unit-layout">
    <UnitHeader />

    <nuxt />

    <FooterBlock />
  </div>
</template>

<script>
import UnitHeader from '~/components/blocks/UnitHeader'
import Footer from '~/components/blocks/Footer'

export default {
  components: { UnitHeader, FooterBlock: Footer }
}
</script>

<style lang="stylus">
.unit-layout
  padding-top 18px

@media (min-width 1280px)
  .unit-layout
    padding-top 28px
</style>
