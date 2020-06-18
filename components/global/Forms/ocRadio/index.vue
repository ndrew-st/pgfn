<template>
  <label
    class="oc-radio"
    :class="[addClass, { 'checked': checkedInput }]"
  >
    <span
      v-if="label"
      class="oc-radio__text label"
    >{{ label }}</span>

    <span
      v-if="addDesc"
      class="oc-radio__text oc-radio__text--add add-text"
    >{{ addDesc }}</span>

    <OcIcon
      v-if="icon"
      class="oc-radio__icon icon"
      :name="icon"
    />

    <input
      v-bind="$attrs"
      :checked="checkedInput"
      :value="checkValue"
      type="radio"
      class="visually-hidden oc-radio__input input"
      v-on="listeners"
    >
  </label>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>

<style lang="stylus" src="./styles/most.styl"/>
<style lang="stylus" src="./styles/group.styl"/>
<style lang="stylus" src="./styles/circle.styl"/>
<style lang="stylus" src="./styles/filter.styl"/>
