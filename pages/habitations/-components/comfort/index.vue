<template>
  <div class="all-comfort">
    <p class="h-comfort">
      Удобства
    </p>

    <div
      class="flex-comfort"
      :class="{active: showAll}"
    >
      <ComfortItem
        v-for="item in orderedComfort"
        :key="item.order"
        :item="item"
      />
    </div>

    <OcButton
      v-if="comfort.length > 10 && !showAll"
      name="border"
      class="show-all"
      @click="showAll = !showAll"
    >
      Показать все ({{ comfort.length }})
    </OcButton>
  </div>
</template>

<style src="./index.styl" lang="stylus" />

<script src="./index.js" />
