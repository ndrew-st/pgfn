<template>
  <div class="checkboxes">
    <ul class="checkboxes__list">
      <li
        v-for="item in items"
        :key="item.name"
        class="checkboxes__item"
      >
        <OcInput
          v-model="current"
          type="radio"
          kind="checkbox-filter"
          name="filter-search-check"
          :label="item.title"
          :check-value="item.name"
          @input="$emit('input', $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
