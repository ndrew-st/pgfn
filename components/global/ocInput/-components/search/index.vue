<template>
  <div
    class="input-wrapper"
    :class="name"
  >
    <OcIcon
      v-if="visibleIcon && rightIcon"
      class="input-wrapper__icon input-wrapper__icon--right"
      :class="rightIconName"
      :name="rightIconName"
      @click.native="clear"
    />

    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :value="value"
      :maxlength="maxLength"
      class="input-wrapper__content"
      :class="additionalClass"
      v-on="$listeners"
      @focusin="focus = true"
      @focusout="focus = false"
    >

    <OcIcon
      v-if="visibleIcon && leftIcon"
      class="input-wrapper__icon input-wrapper__icon--left"
      :class="[icon, { 'focused': focus }]"
      :name="icon"
    />
  </div>
</template>

<script src="./index.js" />
<style lang="stylus" src="./index.styl"/>
