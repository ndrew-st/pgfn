<template>
  <div class="direction-page">
    <Full
      :title="head.title"
      :count="count"
      :description="description"
      :background="head.background"
    />

    <FilterBlock />

    <!-- Направление -->
    <ocGroupCard
      v-if="direction"
      :tabs="direction.tabs"
      :items="direction.items"
      :count="direction.items.length"
      title="Популярные направления"
      @changeTab="handlerTab('direction', $event)"
    >
      <ocCardDirection
        v-for="item in direction.items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'direction')"
      />
    </ocGroupCard>

    <!-- Жильё -->
    <ocGroupCard
      :count="apartments.items.length"
      :auto-width="true"
      :items="apartments.items"
      :tabs="apartments.tabs"
      title="Жильё"
      @changeTab="handlerTab('apartments', $event)"
    >
      <ocCardItem
        v-for="item in apartments.items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'apartments')"
      />
    </ocGroupCard>

    <SubscribeEmail />

    <!-- Услуги -->
    <ocGroupCard
      :count="services.items.length"
      :auto-width="true"
      :items="services.items"
      :tabs="services.tabs"
      title="Услуги"
      @changeTab="handlerTab('services', $event)"
    >
      <ocCardItem
        v-for="item in services.items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'services')"
      />
    </ocGroupCard>

    <DescBlock />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SubscribeEmail from './-components/subscribe-email'
import Full from './-components/full'
import DescBlock from './-components/desc'
import FilterBlock from './-components/filter'
import ocGroupCard from '~/components/ocGroupCard'

import ocCardDirection from '~/components/ocCardDirection'
import ocCardItem from '~/components/ocCardItem'

export default {
  layout: 'main',
  components: {
    Full,
    DescBlock,
    SubscribeEmail,
    ocCardItem,
    ocCardDirection,
    ocGroupCard,
    FilterBlock
  },
  asyncData ({ app, route }) {
    // console.log(app)
    // console.log(route.params.name)
    // this.getData(this.query || this.defaultQuery)
  },
  computed: {
    description () {
      if (typeof this.head.description === 'object') {
        return `${this.head.description[0]}${this.count}${this.head.description[1]}`
      } else {
        return this.head.description
      }
    },
    ...mapGetters('main-page', ['direction', 'apartments', 'services', 'head', 'count'])
  },
  mounted () {
  },
  methods: {
    handlerTab (field, url) {
      // this.updateTabs({ field, url })
      //   .catch(err => console.log('Error change tab: ', err))
    },
    handlerLike (idCard, field) {
      // what do with likes
    },
    ...mapActions('main-page', ['getData', 'updateTabs'])
  },
  head () {
    return {
      title: `Personal.Guide — путеводитель по твоим правилам!`,
      meta: [
        { name: 'description', content: this.description },
        { name: 'keywords', content: `жильё, квартира, дом, отель, гостиница, снять, аренда, посуточно, путешествия, достопримечательности, крым, россия,` }
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>
