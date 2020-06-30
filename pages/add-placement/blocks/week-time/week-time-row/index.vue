<template>
  <div class="flex">
    <ApCheckbox class="day-week">
      <div class="day-week__flex">
        <span>
          {{ day }}
        </span>

        <span>с</span>
      </div>
    </ApCheckbox>

    <ApTimeSelect />

    <span class="day-week__to">по</span>

    <ApTimeSelect />
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
