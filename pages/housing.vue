<template>
  <div class="housing">
    <div class="housing__container">
      <div class="housing__title-container">
        <h1 class="housing__title">
          {{ header.title }}
        </h1>
        <span class="housing__count">{{ header.count }}</span>
      </div>

      <CatalogFilter
        class="housing__filters"
      />

      <div class="housing__content">
        <nuxt-child />
      </div>

      <OcPagination
        :current="currentPage"
        :total="itemsLength"
        :per-page="perPage"
        class="housing__pagination"
        @page-changed="fetchItems"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CatalogFilter from '~/components/blocks/CatalogFilter'

export default {
  components: { CatalogFilter },
  // async asyncData ({ app }) {
  //   await app.store.dispatch(`housing/getData`)
  // },
  layout: 'main',
  data () {
    return {
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    ...mapState(`housing`, {
      header: (state) => {
        return {
          title: state.result.title || 'Title 12',
          count: state.result.count || 124
        }
      },
      itemsLength: state => state.result.items.length
    })
  },
  methods: {
    fetchItems () {

    }
  }
}
</script>

<style lang="stylus" scoped>
.housing
  &__container
    display flex
    flex-wrap wrap
    max-width 1280px
    margin 0 auto
    padding-top 26px

  &__title-container
    order 2
    flex-basis 100%

    display flex
    margin-bottom 16px
    padding 0 18px

    @media (min-width 1280px)
      padding 0

  &__title
    margin-right 8px

    font-style normal
    font-weight bold
    font-size 18px
    line-height 24px
    letter-spacing -0.1px
    color $dark

  &__count
    font-style normal
    font-weight normal
    font-size 13px
    line-height 13px
    letter-spacing 0.2px
    color $secondary

  &__filters
    flex-basis 100%
    display flex
    margin-bottom 20px
    padding 0 18px

    order 1

  &__content
    order 3

    width 100%

  &__pagination.pagination
    margin-bottom 70px
    padding 0 48px

    order 4

@media(min-width 1090px)
  .housing
    margin-top 91px
    padding-bottom 55px

    &__container
      padding-top 56px

@media(min-width 1280px)
  .housing
    &__title
      margin-right 12px

      font-size 32px
      line-height 24px

    &__count
      font-size 18px
      line-height 18px

    &__title-container
      margin-bottom 32px

      order 1

    &__filters
      margin-bottom 52px
      padding 0

      order 2

    &__content
      flex-basis 100%
      margin-bottom 50px

      order 3
</style>
