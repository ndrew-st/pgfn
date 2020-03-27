<template>
  <div class="booking">
    <h1>Бронирование</h1>

    <p>Даты </p>

    <OcDateRange
      :day-list="dayList"
      @selectInterval="selectInterval"
    />

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

<script src="./index.js"></script>

<style src="./index.styl" lang="stylus" scoped></style>
