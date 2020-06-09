<template>
  <div class="main-layout">
    <MainHeader />

    <nuxt />

    <Footer />
  </div>
</template>

<script>
import MainHeader from '~/components/blocks/MainHeader'
import Footer from '~/components/blocks/Footer'

export default {
  components: { MainHeader, Footer }
}
</script>
