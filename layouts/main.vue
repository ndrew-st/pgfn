<template>
  <div class="main-layout">
    <MainHeader />

    <nuxt />

    <ocFooter />
  </div>
</template>

<script>
import MainHeader from '~/components/ocMainHeader'
import ocFooter from '~/components/ocFooter'

export default {
  components: { MainHeader, ocFooter }
}
</script>

<style lang="stylus">

</style>
