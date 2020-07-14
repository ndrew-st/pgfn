<template>
  <div class="description-block">
    <h2
      v-if="title.length"
      class="description-block__title"
    >
      {{ title }}
    </h2>
    <p class="description-block__desc">
      {{ desc(0) }}
    </p>
    <transition name="fade">
      <p
        v-if="show"
        class="description-block__desc description-block__desc--all"
      >
        {{ desc(1) }}
      </p>
    </transition>
    <OcButton
      name="transparent"
      add-class="desc-block-button"
      @click.prevent="show = !show"
    >
      {{ show ? 'Свернуть' : 'Читать далее' }}
    </OcButton>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
