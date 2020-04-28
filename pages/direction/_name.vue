<template>
  <div class="direction-page">

    <Full
      :title="head.title"
      :description="head.description"
      :background="head.background"/>

    <!-- Направление -->
    <GroupCard
      v-if="direction"
      :tabs="direction.tabs"
      :items="direction.items"
      :count="direction.items.length"
      @changeTab="handlerTab('direction', $event)"
      title="Популярные направления">
      <CardDirection
        v-for="item in direction.items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'direction')"/>
    </GroupCard>

    <!-- Жильё -->
    <GroupCard
      @changeTab="handlerTab('apartments', $event)"
      :autoWidth="true"
      :count="apartments.items.length"
      :items="apartments.items"
      :tabs="apartments.tabs"
      title="Жильё">
      <CardItem
        v-for="item in apartments.items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'apartments')"/>
    </GroupCard>

    <SubscribeEmail/>

    <!-- Услуги -->
    <GroupCard
      @changeTab="handlerTab('services', $event)"
      :autoWidth="true"
      :count="services.items.length"
      :items="services.items"
      :tabs="services.tabs"
      title="Услуги">
      <CardItem
        v-for="item in services.items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'services')"/>
    </GroupCard>

    <DescBlock/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SubscribeEmail from './-components/subscribe-email'
import Full from './-components/full'
import DescBlock from './-components/desc'
import GroupCard from '~/components/ocGroupCard'

import CardDirection from '~/components/ocCardDirection'
import CardItem from '~/components/ocCardItem'

export default {
  layout: 'main',
  components: {
    Full,
    DescBlock,
    SubscribeEmail,
    CardItem,
    CardDirection,
    GroupCard
  },
  data () {
    return {
      defaultQuery: 'Крым',
      error: null
    }
  },
  computed: {
    query () {
      return this.$route.params.name
    },
    ...mapGetters('main-page', ['direction', 'apartments', 'services', 'head'])
  },
  mounted () {
    this.getData(this.query || this.defaultQuery)
      .catch((err) => {
        this.error = err
      })
  },
  methods: {
    handlerTab (field, url) {
      this.updateTabs({ field, url })
        .catch(err => console.log('Error change tab: ', err))
    },
    handlerLike (idCard, field) {
      // what do with likes
    },
    ...mapActions('main-page', ['getData', 'updateTabs'])
  }
}
</script>

<style lang="stylus">
</style>
