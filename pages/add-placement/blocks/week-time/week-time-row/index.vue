<template>
  <div class="flex">
    <ApCheckbox
      class="day-week"
      :checked="checked"
      @change="$emit('change', $event)"
    >
      <div class="day-week__flex">
        <span>
          {{ day }}
        </span>

        <span>с</span>
      </div>
    </ApCheckbox>

    <ApTimeSelect
      :sel-time="start"
      @change="$emit('change-time', {val: $event, type: 'start'})"
    />

    <span class="day-week__to">по</span>

    <ApTimeSelect
      :sel-time="end"
      @change="$emit('change-time', {val: $event, type: 'end'})"
    />
    <!-- <p>day: {{ day }} checked: {{ checked }} start: {{ start }} end: {{ end }}</p> -->
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
