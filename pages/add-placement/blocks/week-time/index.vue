<template>
  <div class="week-time">
    <WeekTimeRow
      v-for="item in data"
      :key="item.id"
      :day="item.name"
      :checked="item.checked"
      :start="item.intervalTime.timeStart"
      :end="item.intervalTime.timeEnd"
      @change="$emit('change', $event, item.id)"
      @change-time="$emit('change-time', $event, item.id)"
    />

    <div class="week-time__flex">
      <button
        class="week-time__ready"
        @click="ready"
      >
        Готово
      </button>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
