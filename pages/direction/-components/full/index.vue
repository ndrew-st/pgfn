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

      <div
        v-if="buttons !== ''"
        class="flex"
      >
        <button
          v-if="buttons === 'rent'"
          class="full-block__rent-in"
        >
          Снять жильё
        </button>

        <button
          v-if="buttons === 'rent'"
          class="full-block__rent-out"
        >
          Сдать жильё
        </button>

        <button
          v-if="buttons === 'request'"
          class="full-block__rent-in"
        >
          Подать заявку
        </button>

        <button
          v-if="buttons === 'catalog'"
          class="full-block__rent-in"
        >
          Каталог заявок
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
