<template>
  <div class="booking">
    <h1>Бронирование</h1>

    <p>Даты</p>

    <input
      class="dates"
      type="text"
      value="Заезд и выезд"
    >

    <br>

    <p>Гости</p>

    <br>

    <div class="div-flex">
      <OcSelectList
        class="select-list"
        :items="items1"
        :type="multiselect"
        empty-select="Выберите гостей"
        @changeSelect="changeSelect"
      />

      <OcSelectList
        :items="items2"
        :type="multiselect"
        empty-select="Добавить детей"
        @changeSelect="changeSelect"
      />
    </div>

    <div class="booking-button">
      <div class="text-button">
        Забронировать
      </div>
    </div>
  </div>
</template>

<script>
import OcSelectList from '@/components/ocSelectList/index.vue'

export default {
  components: {
    OcSelectList
  },
  data: () => ({
    items1: [
      {
        name: '2 взрослых',
        flag: true,
        icon: 'icon item'
      },
      {
        name: '3 взрослых',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '4 взрослых',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '5 взрослых',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '999999999999 взрослых',
        flag: false,
        icon: 'icon intem'
      }
    ],
    items2: [
      {
        name: '1 ребёнок',
        flag: false,
        icon: 'icon item'
      },
      {
        name: '2 ребёнка',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '3 ребёнка',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '4 ребёнка',
        flag: false,
        icon: 'icon intem'
      },
      {
        name: '5 детей',
        flag: false,
        icon: 'icon intem'
      }
    ]
  }),
  methods: {
    changeSelect (item) {
      item.flag = !item.flag
    }
  }
}
</script>

<style src="./index.styl" lang="stylus" scoped></style>
