<template>
  <div class="filter">
    <Checkboxes
      :current-tab="currentActive"
      :items="checkboxes"
      @input="changeTab"
    />

    <div class="filter__content">
      <component
        :is="currentActive"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
