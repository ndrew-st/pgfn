<template>
  <div>
    <h1>Бронирование</h1>

    <p>Даты</p>

    <input
      type="text"
      value="Заезд и выезд" />

    <p>Гости</p>

    <div class="div-flex">
      <!-- <div>
        <select v-model="user">
          <option>1 взрослый</option>
          <option>2 взрослых</option>
          <option>3 взрослых</option>
        </select>
      </div> -->

      <OcSelectList
        :items="items"
        :type="multiselect"
        v-on:changeSelect="changeSelect"
      />

      <div class="add-children">
        добавить детей
      </div>
    </div>

    <div class="booking-button">
      <div class="text-button">Забронировать</div>
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
    items: [
      {
        name: '2 взрослых',
        flag: false,
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
    ]
  }),
  methods: {
    changeSelect (item) {
      item.flag = !item.flag
    }
  }
}
</script>

<style lang="stylus" scoped>
.div-flex
  display flex

.add-children
  border 1px solid grey
  margin 0px 15px
  padding 0px 15px

.booking-button
  display flex
  width 140px
  height 35px
  border-radius 5px
  background-color rgb(113, 64, 184)
  margin-top 20px

.text-button
  margin auto
</style>
