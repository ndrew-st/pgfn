<template>
  <ul class="ap-radio-list__list">
    <li
      v-for="item in list"
      :key="item.value"
      class="ap-radio-list__item"
    >
      <!-- <OcRadio
        v-model="checkedValue"
        icon="circle-radio"
        name="name"
        kind="circle"
        :check-value="item.value"
        :label="item.label"
      /> -->
    </li>
  </ul>
</template>

<script src="./index.js"/>

<style src="./index.styl" lang="stylus"/>
