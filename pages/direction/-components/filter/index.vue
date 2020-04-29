<template>
  <div class="filter">
    <Checkboxes
      @input="changeTab"
      :current-tab="currentActive"
      :items="checkboxes"/>

    <div class="filter__content">
      <component
        :is="currentActive"/>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
