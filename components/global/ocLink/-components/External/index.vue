<template>
  <a
    class="link"
    :href="href"
  >
    <slot name="icon" />
    <slot>перейти</slot>
  </a>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
