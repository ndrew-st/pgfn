<template>
  <select class="ap-time-select__sel">
    <option
      v-for="(item, index) in timeArray"
      :key="index"
    >
      {{ item }}
    </option>
  </select>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
