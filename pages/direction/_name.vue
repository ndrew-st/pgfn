<template>
  <div class="direction-page">
    <Full
      :title="header.title"
      :description="header.description"
      :background="header.background"
    />

    <FilterBlock />

    <!-- Направление -->
    <ocGroupCard
      v-if="direction && direction.items.length"
      :tabs="direction.tabs"
      :items="direction.items"
      :count="direction.count"
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
      :count="apartments.count"
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
        type="housing"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'apartments')"
      />
    </ocGroupCard>

    <SubscribeEmail />

    <!-- Услуги -->
    <ocGroupCard
      v-if="!isEmptyObj(services)"
      :count="services.count"
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
        type="services"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'services')"
      />
    </ocGroupCard>

    <DescBlock />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import SubscribeEmail from './-components/subscribe-email'
import Full from './-components/full'
import DescBlock from './-components/desc'
import FilterBlock from './-components/filter'

import isEmptyObject from '~/utils/isEmptyObject'

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
  async asyncData ({ params, store }) {
    await store.dispatch(`main-page/getData`, params.name || `Крым`)
  },
  computed: {
    ...mapState('main-page', {
      direction: state => state.result.direction,
      apartments: state => state.result.apartments,
      services: state => state.result.services || {},
      head: (state) => {
        return {
          title: state.result.title,
          description: state.result.description,
          keywords: state.result.keywords
        }
      },
      header: (state) => {
        return {
          title: state.result.header,
          description: state.result.mainText,
          background: state.result.background
        }
      },
      count: state => state.result.count
    })
  },
  methods: {
    isEmptyObj (obj) {
      return isEmptyObject(obj)
    },
    handlerTab (field, url) {
      this.updateTabs({ field, url })
    },
    handlerLike (idCard, field) {
      // what do with likes
    },
    ...mapActions('main-page', ['updateTabs'])
  },
  head () {
    return {
      title: this.head.title,
      meta: [
        { name: 'description', content: this.head.description },
        { name: 'keywords', content: this.head.keywords }
      ]
    }
  }
}
</script>
