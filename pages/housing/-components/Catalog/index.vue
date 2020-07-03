<template>
  <div class="catalog">
    <OcMaps
      :coords="coords"
      class="catalog__map"
    />

    <ul class="catalog__list">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="catalog__item"
      >
        <OcCard
          type="housing"
          :kind="type"
          :item="item"
          :is-liked="false"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
