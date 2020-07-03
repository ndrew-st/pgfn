<template>
  <p class="catalog-toggle">
    <OcButton
      slot="button"
      class="catalog-toggle__main"
      :class="{ 'selected': selected }"
      name="filter"
      :active="active"
      :selected="selected"
      v-on="$listeners"
    >
      <slot />
    </OcButton>
    <OcIcon
      v-if="selected"
      name="clear"
      class="catalog-toggle__clear"
      @click.prevent.stop.native="$emit('clear')"
    />
  </p>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
