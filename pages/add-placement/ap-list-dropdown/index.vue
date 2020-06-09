<template>
  <div>
    <ul
      class="ap-list-dropdown__ul"
    >
      <li
        v-for="(item, index) in list"
        :key="index"
        class="ap-list-dropdown__li"
        @click="$emit('selectItem', item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
