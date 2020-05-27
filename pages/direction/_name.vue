<template>
  <div
    :key="date"
    class="direction-page"
  >
    <Full
      :title="header.title"
      :description="header.description"
      :background="header.background"
      :features="header.features"
    />

    <FilterBlock />

    <!-- Направление -->
    <ocGroupCard
      v-show="direction && direction.items.length"
      :tabs="direction.tabs"
      :items="direction.items"
      :count="direction.count"
      name="direction"
      title="Популярные направления"
    >
      <ocCardDirection
        v-for="(item, index) in direction.items"
        :key="item.name + item.address"
        :item="item"
        :is-liked="isLiked(index, 'direction')"
        @setLike="handlerLike(index, 'direction')"
      />
    </ocGroupCard>

    <!-- Жильё -->
    <ocGroupCard
      :count="apartments.count"
      :auto-width="true"
      :items="apartments.items"
      :tabs="apartments.tabs"
      title="Жильё"
      name="apartments"
    >
      <ocCardItem
        v-for="(item, index) in apartments.items"
        :key="item.name + item.address"
        :item="item"
        type="housing"
        :is-liked="isLiked(index, 'apartments')"
        @setLike="handlerLike(index, 'apartments')"
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
      name="services"
    >
      <ocCardItem
        v-for="(item, index) in services.items"
        :key="item.name + item.address"
        :item="item"
        type="services"
        :is-liked="isLiked(index, 'services')"
        @setLike="handlerLike(index, 'services')"
      />
    </ocGroupCard>

    <DescBlock
      v-if="description"
      :title="description.title"
      :content="description.text"
    />
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
  mounted () {
    this.$nextTick(() => {
      this.date = Math.random()
    })
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
          features: state.result.features || {},
          description: state.result.mainText,
          background: state.result.background
        }
      },
      description: state => state.result.description || null,
      count: state => state.result.count
    })
  },
  methods: {
    isLiked (id, field) {
      return this.likes[field].includes(id)
    },
    isEmptyObj (obj) {
      return isEmptyObject(obj)
    },
    handlerLike (idCard, field) {
      this.likes = {
        ...this.likes,
        [field]: [
          ...this.likes[field],
          idCard
        ]
      }
    }
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
