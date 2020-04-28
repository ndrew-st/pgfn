<template>
  <div class="direction-page">

    <Full
      :title="result.title"
      :description="result.description"
      :background="result.background"/>

    <!-- Направление -->
    <GroupCard
      v-if="direction"
      :tabs="tabs"
      :items="itemsSec"
      :count="244"
      :autoWidth="false"
      @changeTab="handlerTab('direction', $event)"
      title="Популярные направления">
      <CardDirection
        v-for="item in itemsSec"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'direction')"/>
    </GroupCard>

    <!-- Жильё -->
    <GroupCard
      @changeTab="handlerTab('housing', $event)"
      :autoWidth="true"
      :count="213"
      :items="items"
      :tabs="tabs"
      title="Жильё">
      <CardItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :is-liked="false"
        @setLike="handlerLike(item.id, 'housing')"/>
    </GroupCard>

    <SubscribeEmail/>

    <!-- Услуги -->
    <GroupCard
      @changeTab="handlerTab('services', $event)"
      :autoWidth="true"
      :count="213"
      :items="items"
      :tabs="tabs"
      title="Услуги">
      <CardItem
        v-for="item in items"
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

    }
  },
  computed: {
    query () {
      return this.$route.params.name
    },
    ...mapGetters('main-page', [ 'direction', 'apartments', 'services', 'title', 'description', 'image' ])
  },
  mounted () {
    if (!this.query) {

    }
  },
  methods: {
    handlerTab (field, evt) {

    },
    handlerLike (idCard, field) {

    },
    ...mapActions('main-page', [''])
  }
}
</script>

<style lang="stylus">
</style>
