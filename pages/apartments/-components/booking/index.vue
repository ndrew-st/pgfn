<template>
  <div>
    <h1>Бронирование</h1>

    <p>Даты</p>

    <input
      type="text"
      value="Заезд и выезд" />

    <p>Гости</p>

    <div class="div-flex">
      <div>
        <select v-model="user">
          <option>1 взрослый</option>
          <option>2 взрослых</option>
          <option>3 взрослых</option>
        </select>
      </div>

      <div class="add-children">
        добавить детей
      </div>
    </div>

    <div class="booking-button">
       <div class="text-button">Забронировать</div>
    </div>
  </div>
</template>

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
