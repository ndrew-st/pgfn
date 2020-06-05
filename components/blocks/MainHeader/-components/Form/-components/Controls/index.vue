<template>
  <div class="form-controls">
    <OcButton
      :disabled="activeStep + 1 === stepLength"
      name="transparent"
      @click.prevent="$emit('changeStep')"
    >
      Пропустить
    </OcButton>

    <OcButton
      v-if="activeStep + 1 === stepLength"
      name="most"
      add-class="mobile-filter"
      color="red"
      @click.prevent="$emit('submit')"
    >
      Искать
    </OcButton>

    <OcButton
      v-else
      name="most"
      color="red"
      add-class="mobile-filter"
      @click.prevent="$emit('changeStep')"
    >
      Далее
    </OcButton>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
