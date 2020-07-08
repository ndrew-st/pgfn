<template>
  <div class="full-block">
    <img
      :src="background"
      :width="2400"
      :height="1600"
      class="full-block__bg-image"
      :alt="title"
    >
    <div class="full-block__container">
      <h2 class="full-block__title">
        {{ title }}
      </h2>
      <div
        class="full-block__description"
        v-html="description"
      />
      <!--      <FeaturePlace-->
      <!--        class="full-block__features"-->
      <!--        :temperature="features.temp"-->
      <!--        :water-temperature="features.waterTemp"-->
      <!--        :count="features.current"-->
      <!--      />-->
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
