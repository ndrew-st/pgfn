<template>
  <div class="filter">
    <ul class="filter__list">
      <li
        v-for="filter in filters"
        :key="filter.name"
        class="filter__item"
      >
        <OcInput
          v-model="selected"
          type="radio"
          kind="checkbox-filter"
          name="desktop-filter"
          :label="filter.title"
          :check-value="filter.name"
          @input="$emit('input', $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
