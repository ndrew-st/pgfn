<template>
  <div class="full-block">
    <OcImg
      :alt="title"
      :src="background"
      :width="2400"
      :height="1600"
      class="full-block__bg-image"
    />
    <div class="full-block__container">
      <h2 class="full-block__title">
        {{ title }}
      </h2>
      <p
        class="full-block__description"
        v-html="description"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
