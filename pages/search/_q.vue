<template>
  <div class="search-page">
    <div class="search-page__container">
      <!-- v-if="result.length" -->
      <div
        class="search-page__show-contaienr"
      >
        <MobileFilter
          class="search-page__mobile-filter"
        />

        <div
          class="search-page__title-container"
        >
          <h2 class="search-page__title search-page__title--desk">
            Результат по запросу «{{ query }}»
          </h2>
          <h2 class="search-page__title search-page__title--mobile">
            Найдено жильё в {{ query }}
          </h2>
          <span class="search-page__count-result">244</span>
        </div>

        <ocFilter
          :tabs="resTabs.tabs"
          class="search-page__filter"
          @changeTab="changeTab"
        />

        <!-- <div class="search-page__content search-content">
          <ul
            class="search-content__list">
            <li
              v-for="card in result"
              :key="card.id"
              class="search-content__item">
              {{ card }}
            </li>
          </ul>
        </div> -->
      </div>

      <!-- <div
        class="search-page__content search-page__content--empty">
        <h2 class="search-page__content--title">Ничего не найдено</h2>
        <p class="search-page__content--text">Попробуйте написать название по-другому или сократить запрос.</p>
      </div> -->

      <!-- v-if="result.length >= 16" -->
      <Paginate
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

import ocFilter from '~/components/ocFilter'
import MobileFilter from '~/components/ocMobileFilter'
import Paginate from '~/components/ocPagination'

export default {
  layout: 'main',
  components: { ocFilter, Paginate, MobileFilter },
  validate ({ query }) {
    return query.q && query.q.length
  },
  data () {
    return {
      resTabs: [],
      totalPhotos: 100,
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    query () {
      return this.$route.query.q
    },
    pageCount () {
      return 3
    },
    ...mapState('search', ['search', 'result'])
  },
  asyncData ({ app, query }) {
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
  height 100vh

  &__title
    margin 0
    margin-right 8px
    margin-bottom 16px

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #272528;

    &--desk
      display none

  &__content
    &--title
      margin 0
      margin-bottom 8px

      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #272528;

    &--text
      margin 0

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #272528;

  &__count-result
    align-self flex-start

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.2px;
    color: #989BA8;

  &__filter
    display none

  &__mobile-filter
    margin-bottom 20px

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

    &__title-container
      margin-bottom 30px

    &__title
      &--mobile
        display none

      &--desk
        display block
        margin-right 12px

        font-size: 32px;
        line-height: 24px;

    &__count-result
      font-size 18px
      line-height 24px

    &__mobile-filter
      display none

    &__filter
      display block

    &__container
      padding-top 55px
      padding-bottom 70px

    &__pagination
      display flex
      margin-top 110px
</style>
