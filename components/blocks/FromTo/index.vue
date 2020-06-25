<template>
  <div class="container">
    <p
      v-if="title"
      class="container__title"
    >
      {{ title }}
      <span
        v-if="required"
        class="container__title--required"
      >*</span>
    </p>

    <div class="container__content">
      <OcInput
        v-model="from"
        :label="labelFrom"
        :type="type"
        kind="most"
        add-class="half"
        :measure="measure"
        class="container__input container__input--from"
      />
      <OcInput
        v-model="to"
        :label="labelTo"
        :type="type"
        add-class="half"
        kind="most"
        :measure="measure"
        class="container__input container__input--to"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
