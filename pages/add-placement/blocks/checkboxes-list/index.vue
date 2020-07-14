<template>
  <ul class="ap-block-check-list__ul">
    <li
      v-for="item in list"
      :key="item.value"
      class="ap-block-check-list__item"
    >
      <ApCheckbox :par-name="item.value">
        {{ item.label }}
      </ApCheckbox>
    </li>
  </ul>
</template>

<script src="./index.js" />

<style src="./index.styl" lang="stylus"/>
