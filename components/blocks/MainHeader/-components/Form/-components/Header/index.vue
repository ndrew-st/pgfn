<template>
  <div class="form-header">
    <OcButton
      name="transparent"
      icon="line-arrow"
      add-class="line-icon"
      @click.prevent="$emit('changeStep')"
    >
      Назад
    </OcButton>

    <OcButton
      v-if="activeStep && showClear"
      name="transparent"
      :disabled="!activeClear"
      add-class="clear"
      @click.prevent="$emit('clearData')"
    >
      Очистить
    </OcButton>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
