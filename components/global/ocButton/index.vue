<template>
  <button
    v-cloak
    :type="type"
    :class="[buttonClass, addClass, { 'active': active }]"
    :disabled="disabled"
    v-on="$listeners"
  >
    <OcIcon
      v-if="icon.length"
      class="icon-content"
      :class="icon"
      :name="icon"
    />
    <span class="oc-button__text text-content">
      <slot />
    </span>
  </button>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
