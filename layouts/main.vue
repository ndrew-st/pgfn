<template>
  <div class="main-layout">
    <MainHeader />

    <nuxt />

    <Footer />

    <PopUpAddRequest />
  </div>
</template>

<script>
import MainHeader from '~/components/blocks/MainHeader'
import Footer from '~/components/blocks/Footer'
import PopUpAddRequest from '~/components/blocks/AddRequest'

export default {
  components: { MainHeader, Footer, PopUpAddRequest }
}
</script>
