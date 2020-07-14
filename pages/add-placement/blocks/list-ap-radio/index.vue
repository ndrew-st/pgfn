<template>
  <ul class="list-ap-radio__list">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="list-ap-radio__item"
    >
      <ApRadio
        :checked="selId === item.id"
        :value="item.id"
        :label="item.label"
        @change="change"
      />
    </li>
  </ul>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
