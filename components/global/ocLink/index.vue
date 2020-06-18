<template>
  <component
    :is="kind"
    v-bind="$attrs"
    :to="to"
    :href="href"
  >
    <OcIcon
      v-if="icon"
      slot="icon"
      class="link-icon"
      :class="[icon]"
      :name="icon"
    />
    <slot />
  </component>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
