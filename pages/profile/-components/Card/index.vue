<template>
  <div class="card-container">
    <component
      :is="type"
      v-bind="$attrs"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
