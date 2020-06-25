<template>
  <div class="housing-content">
    <ul class="housing-content__list">
      <li
        v-for="item in items"
        :key="item.id"
        class="housing-content__item"
      >
        <OcCard
          type="housing"
          kind="most"
          :item="item"
          :is-liked="false"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(`housing`, {
      items: state => state.result.items
    })
  }
}
</script>

<style lang="stylus" scoped>
.housing-content
  &__list
    display flex
    flex-wrap wrap
    justify-content space-between
    margin 0
    padding 0

    list-style none

  &__item
    margin-bottom 32px

@media (min-width 1090px)
  .housing-content
    &__item
      margin-bottom 71px
</style>
