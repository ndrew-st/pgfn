<template>
  <div class="housing">
    <div class="housing__container">
      <div class="housing__title-container">
        <h1 class="housing__title">
          <!--          {{ title }}-->
          Жильё
        </h1>
        <span class="housing__count">{{ count }}</span>
      </div>

      <CatalogFilter
        v-if="typeFilter !== 'main'"
        class="housing__filters"
        :content="filters"
        @input="selectFilter"
      />

      <client-only>
        <div class="housing__content">
          <nuxt-child />
        </div>
      </client-only>

      <OcPagination
        v-if="typeFilter !== 'main' && count > 16"
        :current="page"
        :total="count"
        :per-page="limit"
        class="housing__pagination"
        @page-changed="fetchItems"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import CatalogFilter from '~/components/blocks/CatalogFilter'

export default {
  components: { CatalogFilter },
  asyncData ({ app: { store }, query: { page, filters } }) {
    store.dispatch(`housing/changePage`, page || 1)

    if (!filters || !filters.length) {
      return
    }

    let filter = {}
    filters.slice(1).split('&').forEach((item) => {
      const itm = item.split('=')
      filter = {
        ...filter,
        [itm[0]]: JSON.parse(itm[1])
      }
    })

    return { filters: filter }
  },
  data () {
    return {
      filters: null
    }
  },
  layout: 'main',
  computed: {
    ...mapState(`housing`, {
      title: state => state.result.title,
      count: state => state.result.length,
      limit: state => state.limit,
      page: state => state.page,
      typeFilter: state => state.filters.typeFilter
    })
  },
  methods: {
    fetchItems (nextStep) {
      this.$router.push({ query: { page: nextStep } })
      this.changePage(nextStep)
    },
    ...mapActions(`housing`, [`changePage`, `getPlacementData`, `getRequestData`]),
    selectFilter (res) {
      if (!res) {
        return
      }

      let filters = ''

      for (const key in res) {
        if (res[key]) {
          filters = filters + `&${key}=${JSON.stringify(res[key])}`
        }
      }

      this.$router.push({ query: { filters } })

      if (this.typeFilter === 'main') {
        return
      }

      if (this.typeFilter === 'supply') {
        this.getPlacementData(filters)
      } else {
        this.getRequestData(filters)
      }
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
    padding-bottom 70px

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

    &__pagination.pagination
      margin-bottom 0
</style>
