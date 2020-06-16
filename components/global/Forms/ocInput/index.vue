<template>
  <div
    class="input-container"
    :class="[mainClass, { 'active': active }, { 'error': error }]"
  >
    <label
      v-if="label"
      :for="id"
      class="input-container__label label"
    >
      {{ label }}
      <span
        v-if="addDesc"
        class="input-container__label--text description"
      >
        {{ addDesc }}
      </span>
    </label>

    <OcIcon
      v-if="visibleIcon && rightIcon"
      class="input-container__icon input-container__icon--right icon icon-right"
      :class="[rightIconName]"
      :name="rightIconName"
      @click.native="clear"
    />

    <input
      :id="id"
      :value="value"
      v-bind="$attrs"
      :maxlength="maxLength"
      :name="name"
      type="text"
      class="input-container__input input"
      :class="[additionalClass]"
      v-on="listeners"
    >

    <OcIcon
      v-if="visibleIcon && leftIcon"
      class="input-container__icon input-container__icon--left icon icon-left"
      :class="[icon, { 'focused': focused }]"
      :name="icon"
    />

    <p
      v-if="error"
      class="input-container__error error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>

<style lang="stylus" src="./styles/date.styl"/>
<style lang="stylus" src="./styles/most.styl"/>
<style lang="stylus" src="./styles/search.styl"/>
