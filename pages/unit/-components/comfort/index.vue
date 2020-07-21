<template>
  <div class="all-comfort">
    <p class="h-comfort">
      Удобства
    </p>

    <ul
      ref="container"
      class="flex-comfort"
      :class="{ active: showAll }"
    >
      <li
        v-for="(item, index) in orderedComfort"
        :key="index"
        class="flex-comfort__item"
      >
        <ComfortItem :item="item" />
      </li>
    </ul>

    <OcButton
      v-if="isShow"
      name="border"
      class="show-all"
      @click="showAll = !showAll"
    >
      {{ textButton }}
    </OcButton>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus" />
