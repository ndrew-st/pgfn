<template>
  <div class="checkboxes">
    <ul class="checkboxes__list">
      <li
        v-for="item in items"
        :key="item.name"
        class="checkboxes__item"
      >
        <OcRadio
          v-model="current"
          kind="filter"
          name="filter-search-check"
          :label="item.title"
          :check-value="item.name"
          @change="$emit('input', $event.target.value)"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
