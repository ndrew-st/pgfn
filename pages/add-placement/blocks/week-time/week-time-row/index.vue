<template>
  <div class="flex">
    <ApCheckbox
      class="day-week"
      :checked="checked"
      @change="checkState"
    >
      <div class="day-week__flex">
        <span>
          {{ day.name }}
        </span>

        <span>с</span>
      </div>
    </ApCheckbox>

    <ApTimeSelect
      :sel-time="timeStart"
      @change="changeStart"
    />

    <span class="day-week__to">по</span>

    <ApTimeSelect
      :sel-time="timeFinish"
      @change="changeFinish"
    />
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
