<template>
  <label
    class="oc-checkbox"
    :class="[addClass, { 'checked': checkedInput }, { 'active': active }]"
  >
    <span
      v-if="label"
      class="oc-checkbox__label label"
    >{{ label }}</span>

    <OcIcon
      class="oc-checkbox__icon icon"
      :class="[icon]"
      :name="icon"
    />

    <input
      v-bind="$attrs"
      :value="checkValue"
      :checked="checkedInput"
      type="checkbox"
      class="visually-hidden"
      v-on="$listeners"
    >
  </label>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>

<style lang="stylus" src="./styles/most.styl"/>
<style lang="stylus" src="./styles/toggle.styl"/>
