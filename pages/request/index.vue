<template>
  <div class="container">
    <Header
      class="container__header"
      :step="current + 1"
      :count-steps="config.length"
      :error="error"
      :loading="loading"
      @prev="prev"
    />

    <div class="container__content">
      <h2 class="container__title">
        {{ config[current].title }}
      </h2>
      <component
        :is="config[current].cmp"
      />
    </div>

    <div class="container__footer">
      <OcButton
        class="container__button"
        kind="most"
        color="red"
        @click="next"
      >
        {{ buttonText }}
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
