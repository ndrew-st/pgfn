<template>
  <div class="filter">
    <ul class="filter__list">
      <li
        v-for="filter in filters"
        :key="filter.name"
        class="filter__item unit-filter">
        <label
          :class="{ selected: selected === filter.name }"
          class="unit-filter__label">
          <span class="unit-filter__text">{{ filter.title }}</span>
          <input
            :value="filter.name"
            v-model="selected"
            type="radio"
            name="desktop-filter"
            class="visually-hidden">
        </label>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
