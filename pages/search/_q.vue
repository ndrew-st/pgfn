<template>
  <div class="search-page">
    <div class="search-page__container">
      <div class="search-page__show-container">
        <div class="search-page__title-container">
          <h2 class="search-page__title">
            Результат по запросу «{{ query.search }}»
          </h2>
          <span class="search-page__count-result">{{ result.length }}</span>
        </div>

        <FilterBlock
          class="search-page__filter"
          @change-tab="changeTab"
        />

        <div class="search-page__content search-content">
          <ul class="search-content__list">
            <li
              v-for="card in result"
              :key="card.id"
              class="search-content__item"
            >
              <OcCard
                kind="most"
                type="housing"
                :item="card"
                :is-liked="false"
              />
            </li>
          </ul>
        </div>
      </div>

      <OcPagination
        v-if="result.length >= 16"
        :current="page"
        :total="result.length"
        :per-page="limit"
        class="search-page__pagination"
        @page-changed="fetchItems"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import FilterBlock from './-components/Filter'

export default {
  layout: 'main',
  components: { FilterBlock },
  async asyncData ({ app, query }) {
    await app.store.dispatch(`search/searchResult`, query.search)

    return {
      query,
      guests: null
    }
  },
  data () {
    return {
      current: 'direction'
    }
  },
  computed: {
    ...mapState('search', {
      result: state => state.result,
      limit: state => state.limit,
      page: state => state.page
    })
  },
  mounted () {
    if (this.query.guestsKey) {
      this.guests = JSON.parse(sessionStorage.getItem(this.query.guestsKey))
    }
  },
  methods: {
    ...mapActions(`search`, ['changePage']),
    fetchItems (page) {
      this.changePage(page)
    },
    changeTab (name) {
      console.log('query ', this.query)
      console.log('changeTab ', name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-page
  &__title
    margin 0
    margin-right 8px
    margin-bottom 16px

    font-style normal
    font-weight bold
    font-size 18px
    line-height 24px
    letter-spacing -0.1px
    color $dark

  &__content
    &--title
      margin 0
      margin-bottom 8px

      font-style normal
      font-weight bold
      font-size 22px
      line-height 24px
      letter-spacing 0.2px
      color $dark

    &--text
      margin 0

      font-style normal
      font-weight normal
      font-size 16px
      line-height 20px
      color $dark

  &__count-result
    align-self flex-start

    font-style normal
    font-weight normal
    font-size 13px
    line-height 13px
    letter-spacing 0.2px
    color $secondary

  &__title-container
    display flex

  &__container
    max-width 1280px
    margin 0 auto
    padding 25px 18px

  &__pagination
    display none

  .search-content
    &__list
      display flex
      flex-wrap wrap
      justify-content space-between

@media(min-width 1090px)
  .search-page
    margin-top 84px

    &__title-container
      margin-bottom 30px

    &__title
      margin-right 12px

      font-size 32px
      line-height 24px

    &__count-result
      font-size 18px
      line-height 24px

    &__container
      padding-top 55px
      padding-bottom 70px

    &__pagination
      display flex
      margin-top 110px
</style>
