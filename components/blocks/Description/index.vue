<template>
  <div class="description-block">
    <h2
      v-if="title.length"
      class="description-block__title"
    >
      {{ title }}
    </h2>
    <p class="description-block__desc">
      {{ res[0] }}
    </p>
    <div
      v-if="description.length > 300"
      class="description-block__more-block"
    >
      <transition name="fade">
        <p
          v-if="show"
          class="description-block__desc description-block__desc--all"
        >
          {{ res[1] }}
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
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
