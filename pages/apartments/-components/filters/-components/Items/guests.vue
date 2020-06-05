<template>
  <div class="guests">
    <ul class="guests__list">
      <li
        v-for="item in list"
        :key="item.title"
        class="guests__item"
      >
        <ocCounter
          :key="date"
          :title="item.title"
          :sub-title="item.subTitle"
          :current="result[item.name]"
          @input="updateValue(item.name, $event)"
        />
      </li>
    </ul>
    <Footer
      class="guests__footer"
      @save="save"
      @clear="clear"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import Footer from './-components/Footer'
import ocCounter from '~/components/global/ocCounter'

export default {
  name: 'Guest',
  components: { ocCounter, Footer },
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      list: [
        { title: 'Взрослые', name: 'parent' },
        { title: 'Дети', name: 'children', subTitle: 'От 2 до 12 лет' },
        { title: 'Младенцы', name: 'babies', subTitle: 'До 2 лет' }
      ],
      result: this.value || {},
      date: new Date().toString()
    }
  },
  mounted () {
    this.list.map(item => Vue.set(this.result, item.name, 0))
  },
  methods: {
    save () {
      this.$emit('input', this.result)
      this.$root.$emit('dropdown:hide')
    },
    clear () {
      this.list.map(item => Vue.set(this.result, item.name, 0))
      this.date = new Date().toString()

      this.$emit('input', null)
    },
    updateValue (field, val) {
      this.result[field] = val
    }
  }
}
</script>

<style lang="stylus" scoped>
.guests
  width: 276px
  padding: 28px
  padding-bottom: 0

  background: #FFFFFF;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-sizing: border-box;

  &__list
    margin: 0
    padding: 0

    list-style none

  &__item
    margin-bottom: 24px

    &:last-child
      margin-bottom: 32px
</style>
