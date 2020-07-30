import Vue from 'vue'
import { mapState } from 'vuex'

import SearchPanel from '~/components/blocks/SearchPanel'
import calendar from '~/components/blocks/Calendar'
import guests from './-components/Guests'
import type from './-components/TypeHouse'
import price from './-components/Items/price'
import instantBooking from './-components/Items/instant-booking'
import another from './-components/Another'
import Toggle from './-components/Toggle'

export default {
  components: {
    direction: SearchPanel,
    guests,
    type,
    price,
    date: calendar,
    instantBooking,
    another,
    Toggle
  },
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      items: [
        { name: 'direction', title: 'Направление', desktop: true },
        { name: 'date', title: 'Прибытие, выезд', desktop: true },
        { name: 'guests', title: 'Количество гостей', desktop: true },
        { name: 'type', title: 'Тип жилья', desktop: true },
        { name: 'price', title: 'Цена' },
        { name: 'instantBooking', title: 'Мгновенное бронирование', desktop: true }
        // { name: 'another', title: 'Другие фильтры' }
      ],
      result: {}
    }
  },
  mounted () {
    console.log('this.content ', this.content)

    if (this.content) {
      this.result = this.content

      return
    }
    this.items.map(item => Vue.set(this.result, item.name, null))
  },
  computed: {
    ...mapState(`housing`, {
      typeFilter: state => state.filters.typeFilter
    })
  },
  methods: {
    isShow (name) {
      return this.typeFilter !== 'main' || (this.typeFilter === 'main' && name !== 'another')
    },
    updateValue (field, value) {
      this.result = {
        ...this.result,
        [field]: value
      }

      this.$emit('input', this.result)
    },
    isSelected (name) {
      return this.result[name] !== null
    },
    clear (item) {
      this.result = {
        ...this.result,
        [item]: null
      }
    }
  }
}
