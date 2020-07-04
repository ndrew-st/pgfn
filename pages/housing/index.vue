<template>
  <div class="housing-content">
    <ul class="housing-content__list">
      <li
        v-for="item in allItems"
        :key="item.id"
        class="housing-content__item"
      >
        <OcCard
          type="housing"
          :kind="item.address.coords ? 'maps' : 'most'"
          :item="item"
          :is-liked="false"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
