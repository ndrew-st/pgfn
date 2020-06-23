import Vue from 'vue'

import guests from './-components/Guests'
import type from './-components/TypeHouse'
import price from './-components/Items/price'
import instantBooking from './-components/Items/instant-booking'
import another from './-components/Another'

import direction from '~/components/blocks/SearchPanel'

export default {
  components: {
    direction,
    guests,
    type,
    price,
    instantBooking,
    another
  },
  data () {
    return {
      items: [
        { name: 'direction', title: 'Направление', desktop: true },
        { name: 'date', title: 'Прибытие, выезд', desktop: true },
        { name: 'guests', title: 'Количество гостей', desktop: true },
        { name: 'type', title: 'Тип жилья', desktop: true },
        { name: 'price', title: 'Цена' },
        { name: 'instantBooking', title: 'Мгновенное бронирование', desktop: true },
        { name: 'another', title: 'Другие фильтры' }
      ],
      result: {}
    }
  },
  mounted () {
    this.items.map(item => Vue.set(this.result, item.name, null))
  },
  methods: {
    updateValue (field, value) {
      this.result[field] = value
    },
    isSelected (name) {
      return this.result[name] !== null
    }
  }
}
