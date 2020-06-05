<template>
  <div
    class="input-container"
    :class="[kind, { 'error': error.length }]"
  >
    <label
      v-if="label.length"
      :for="id"
      class="input-container__label label"
    >{{ label }}</label>

    <OcIcon
      v-if="visibleIcon && rightIcon"
      class="input-container__icon input-container__icon--right icon icon-right"
      :class="rightIconName"
      :name="rightIconName"
    />

    <input
      :id="id"
      v-bind="$attrs"
      :value="value"
      type="text"
      class="input-container__input input"
      v-on="$listeners"
      @input="throttledSearch"
      @keydown="keyDown"
    >

    <OcIcon
      v-if="visibleIcon && leftIcon"
      class="input-container__icon input-container__icon--left icon icon-left"
      :class="[icon, { 'focused': focus }]"
      :name="icon"
    />

    <p
      v-if="error.length"
      class="input-container__error error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
