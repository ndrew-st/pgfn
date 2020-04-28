<template>
  <div class="direction-page">

    <Full/>

    <!-- Направление -->
    <GroupCard
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
import Full from './-components/full'
import DescBlock from './-components/desc'
import SubscribeEmail from '../direction/-components/subscribe-email'
import GroupCard from '~/components/ocGroupCard'

import CardDirection from '~/components/ocCardDirection'
import CardItem from '~/components/ocCardItem'

export default {
  layout: 'main',
  components: { Full, DescBlock, SubscribeEmail, CardItem, CardDirection, GroupCard },
  data () {
    return {
      all: {},
      items: [
        {
          id: 1,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 2,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 3,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 4,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 5,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        },
        {
          id: 6,
          name: 'Tree house',
          address: 'Полный адрес',
          attrs: [ '4 гостя', '1 спальня' ],
          rating: 4.3,
          reviews: 128,
          type: 'Отель',
          previewGallery: [ '/cart/cart-1.png', '/cart/cart-2.png', '/cart/cart-3.png', '/cart/cart-4.png' ],
          favorits: false,
          price: 5980,
          oldprice: 8010
        }
      ],
      itemsSec: [
        {
          id: 1,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 2,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 3,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 4,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 5,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        },
        {
          id: 6,
          name: 'Севастополь',
          weather: {
            temperature: '24',
            waterTemperature: '18' // Опционально, может не быть
          },
          current: 4777,
          type: 'Город',
          rating: 4.9,
          reviews: 182,
          favorit: false,
          preview: ''
        }
      ],
      tabs: [
        { name: `Популярные`, url: `/api/apartments/list?q=popular` },
        { name: `Апартаменты`, url: `/api/apartments/list?q=apartments` },
        { name: `Коттеджи и дома`, url: `/api/apartments/list?q=cottage` },
        { name: `Гостиницы`, url: `/api/apartments/list?q=hosinities` },
        { name: `Отели`, url: `/api/apartments/list?q=otels` }
      ]
    }
  },
  asyncData () {

  },
  methods: {
    handlerTab (field, evt) {

    },
    handlerLike (idCard, field) {

    }
  }
}
</script>

<style lang="stylus">
// .direction-page
//   &__direction-slider
//     margin-bottom 50px
</style>
