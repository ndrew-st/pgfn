<template>
  <div class="page-container">
    <MainHeader/>

    <nuxt />

    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/ocFooter'
import MainHeader from '~/components/ocMainHeader'

export default {
  components: { Footer, MainHeader }
}
</script>

<style lang="stylus" scoped>

</style>
