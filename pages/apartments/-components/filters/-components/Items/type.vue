<template>
  <div class="type-filter">
    <ul class="type-filter__list">
      <li
        v-for="item in list"
        :key="item.value"
        class="type-filter__item"
      >
        <ocCheckbox
          :key="date"
          :name="name"
          :label="item.label"
          :value="item.value"
          :checked="isChecked(item.value)"
          @input="updateValue(item.value)"
        />
      </li>
    </ul>
    <Footer
      @save="save"
      @clear="clear"
    />
  </div>
</template>

<script>
import Footer from './-components/Footer'

import ocCheckbox from '~/components/ocCheckbox'

export default {
  name: 'Type',
  components: { Footer, ocCheckbox },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      list: [
        { label: 'Апартаменты', value: 'apartments' },
        { label: 'Коттеджи и дома', value: 'cottages-houses' },
        { label: 'Отели', value: 'otels' },
        { label: 'Гостиницы', value: 'hotels' },
        { label: 'Хостелы', value: 'hostels' },
        { label: 'Квартиры', value: 'flats' },
        { label: 'Комнаты', value: 'rooms' }
      ],
      name: 'type-housing-filter',
      select: this.value || [],
      date: new Date().toString()
    }
  },
  methods: {
    clear () {
      this.select = []
      this.$emit('input', null)
      this.date = new Date().toString()
    },
    save () {
      if (this.select.length) {
        this.$emit('input', this.select)
        this.$root.$emit('dropdown:hide')
      }
    },
    isChecked (value) {
      return this.select.includes(value)
    },
    updateValue (value) {
      this.select.push(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.type-filter
  width: 268px
  padding: 28px
  padding-bottom: 0

  box-sizing border-box
  background #FFFFFF
  box-shadow 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08)
  border-radius 12px

  &__list
    margin: 0
    margin-bottom: 28px
    padding: 0

    list-style none

  &__item
    margin-bottom: 16px
</style>
