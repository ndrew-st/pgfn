<template>
  <div class="main-layout">
    <ocMainHeader />

    <nuxt />

    <ocFooter />
  </div>
</template>

<script>
import ocMainHeader from '~/components/blocks/ocMainHeader'
import ocFooter from '~/components/blocks/ocFooter'

export default {
  components: { ocMainHeader, ocFooter }
}
</script>
