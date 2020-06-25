<template>
  <div class="week-time">
    <WeekTimeRow
      v-for="(day, index) in daysArray"
      :key="index"
      :day="day"
    />

    <div class="week-time__flex">
      <button class="week-time__ready">
        Готово
      </button>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
