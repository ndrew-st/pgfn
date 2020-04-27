<template>
  <div class="mobile-filter">
    <ul class="mobile-filter__list">
      <li
        v-for="filter in filters"
        :key="filter.name"
        class="mobile-filter__item">
        <label class="mobile-filter__label">
          {{filter.title}}
          <input
            :name="filter.name"
            type="checkbox"
            class="visually-hidden">
        </label>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
