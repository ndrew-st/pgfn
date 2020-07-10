<template>
  <div class="request-page">
    request-page
  </div>
</template>

<script>
export default {
  layout: 'unit',
  validate ({ params: { id } }) {
    return !!id
  }
}
</script>

<style lang="stylus" scoped>
.request-page
  max-width 1280px
  margin 0 auto
</style>
