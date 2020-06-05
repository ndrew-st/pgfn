<template>
  <div class="checkbox">
    <label
      class="checkbox__label"
      :class="{ checked: check, responsive: responsive }"
    >
      <OcIcon
        name="check"
        :class="{ responsive: responsive }"
        class="checkbox__icon"
      />
      {{ label }}
      <input
        v-model="check"
        type="checkbox"
        :name="name"
        :value="value"
        class="visually-hidden"
        @change="$emit('input', value)"
      >
    </label>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
