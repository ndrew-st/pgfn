<template>
  <div class="toggle">
    <label
      class="toggle__label"
      :class="{ checked: check }"
    >
      <input
        v-model="check"
        type="checkbox"
        :name="name"
        :value="value"
        class="visually-hidden"
        @change="$emit('input', check)"
      >
    </label>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
