<template>
  <div class="filter">
    <ul class="filter__list">
      <li
        v-for="filter in filters"
        :key="filter.name"
        class="filter__item"
      >
        <OcRadio
          v-model="selected"
          kind="filter"
          name="desktop-filter"
          :label="filter.title"
          :check-value="filter.name"
          @change="$emit('input', $event.target.value)"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
