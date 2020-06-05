<template>
  <div
    :key="date"
    class="direction-page"
  >
    <Full
      :title="header.title"
      :description="header.description"
      :background="header.background"
    />

    <FilterBlock />

    <!-- Направление -->
    <GroupCard
      v-show="direction && direction.items.length"
      :tabs="direction.tabs"
      :items="direction.items"
      :count="direction.count"
      title="Популярные направления"
      @changeTab="handlerTab('direction', $event)"
    >
      <ocCard
        v-for="(item, index) in direction.items"
        :key="item.name + item.address"
        kind="direction"
        :item="item"
        :is-liked="isLiked(index, 'direction')"
        @setLike="handlerLike(index, 'direction')"
      />
    </GroupCard>

    <!-- Жильё -->
    <GroupCard
      :count="apartments.count"
      :auto-width="true"
      :items="apartments.items"
      :tabs="apartments.tabs"
      title="Жильё"
      @changeTab="handlerTab('apartments', $event)"
    >
      <ocCard
        v-for="(item, index) in apartments.items"
        :key="item.name + item.address"
        kind="most"
        :item="item"
        type="housing"
        :is-liked="isLiked(index, 'apartments')"
        @setLike="handlerLike(index, 'apartments')"
      />
    </GroupCard>

    <SubscribeEmail />

    <!-- Услуги -->
    <GroupCard
      v-if="!isEmptyObj(services)"
      :count="services.count"
      :auto-width="true"
      :items="services.items"
      :tabs="services.tabs"
      title="Услуги"
      @changeTab="handlerTab('services', $event)"
    >
      <ocCard
        v-for="(item, index) in services.items"
        :key="item.name + item.address"
        kind="most"
        :item="item"
        type="services"
        :is-liked="isLiked(index, 'services')"
        @setLike="handlerLike(index, 'services')"
      />
    </GroupCard>

    <Description />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import FilterBlock from './-components/filter'
import Full from './-components/full'

import SubscribeEmail from '~/components/blocks/Subscribe'
import Description from '~/components/blocks/Description'
import GroupCard from '~/components/blocks/GroupCard'

import isEmptyObject from '~/utils/isEmptyObject'

export default {
  layout: 'main',
  components: {
    Full,
    Description,
    SubscribeEmail,
    GroupCard,
    FilterBlock
  },
  async asyncData ({ params, store }) {
    await store.dispatch(`direction/getData`, params.name || `Крым`)
  },
  data () {
    return {
      likes: {
        direction: [],
        apartments: [],
        services: []
      },
      date: 0
    }
  },
  computed: {
    ...mapState('direction', {
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
  mounted () {
    this.$nextTick(() => {
      this.date = Math.random()
    })
  },
  methods: {
    isLiked (id, field) {
      return this.likes[field].includes(id)
    },
    isEmptyObj (obj) {
      return isEmptyObject(obj)
    },
    handlerTab (field, url) {
      this.updateTabs({ field, url })
    },
    handlerLike (idCard, field) {
      this.likes = {
        ...this.likes,
        [field]: [
          ...this.likes[field],
          idCard
        ]
      }
    },
    ...mapActions('direction', ['updateTabs'])
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

<style lang="stylus">
  .simple-icon
    & svg circle
    & svg path
      fill black
</style>
