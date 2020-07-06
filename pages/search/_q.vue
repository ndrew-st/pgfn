<template>
  <div class="search-page">
    <div class="search-page__container">
      <div
        v-if="result.length"
        class="search-page__show-container"
      >
        <div
          class="search-page__title-container"
        >
          <h2 class="search-page__title">
            Результат по запросу «{{ query }}»
          </h2>
          <span class="search-page__count-result">244</span>
        </div>

        <FilterBlock
          class="search-page__filter"
          @changeTab="changeTab"
        />

        <div class="search-page__content search-content">
          <ul
            class="search-content__list"
          >
            <li
              v-for="card in result"
              :key="card.id"
              class="search-content__item"
            >
              <OcCard
                kind="most"
                type="housing"
                :item="card"
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        v-else
        class="search-page__content search-page__content--empty"
      >
        <h2 class="search-page__content--title">
          Ничего не найдено
        </h2>
        <p class="search-page__content--text">
          Попробуйте написать название по-другому или сократить запрос.
        </p>
      </div>

      <OcPagination
        v-if="result.length >= 16"
        :current="currentPage"
        :total="totalPhotos"
        :per-page="perPage"
        class="search-page__pagination"
        @page-changed="fetchItems"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import FilterBlock from './-components/Filter'

export default {
  layout: 'main',
  components: { FilterBlock },
  async asyncData ({ app, params }) {
    await app.store.dispatch(`search/searchResult`, params.q)

    return {
      query: params.q
    }
  },
  data () {
    return {
      current: 'direction',
      totalPhotos: 100,
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    pageCount () {
      return 3
    },
    ...mapState('search', ['search', 'result'])
  },
  mounted () {
  },
  methods: {
    fetchItems (page) {

    },
    changeTab (name) {

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
