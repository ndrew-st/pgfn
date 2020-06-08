<template>
  <div class="step-container">
    <h3 class="step-container__title">
      Что вам найти?
    </h3>
    <nuxt-link
      class="step-container__link"
      to="/more-info"
    >
      {{ searchSel }}
    </nuxt-link>

    <ul class="step-container__content">
      <li
        v-for="item in list"
        :key="item.value"
        class="step-container__item"
      >
        <img
          :alt="item.name"
          :src="item.img"
          :srcset="item.img2x"
          width="80"
          height="65"
          class="step-container__image"
        >
        <OcInput
          type="radio"
          kind="radio"
          class="step-container__input"
          :name="nameSec"
          :label="item.name"
          @change="$emit('input', item.value)"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js" />
<style lang="stylus" src="./index.styl"/>
