<template>
  <div class="info-block">
    <p
      v-if="blockName"
      class="h1"
    >
      {{ blockName }}
    </p>
    <slot />
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus" scoped />
