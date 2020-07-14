<template>
  <div class="ap-dadata-dropdown">
    <ul class="ap-dadata-dropdown__ul">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="ap-dadata-dropdown__li"
        @click="$emit('selectAdress', item)"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
