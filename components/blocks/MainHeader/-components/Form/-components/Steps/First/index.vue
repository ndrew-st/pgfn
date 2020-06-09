<template>
  <div class="step-container">
    <h3 class="step-container__title">
      Что вам найти?
    </h3>
    <OcLink
      to="/more-info"
      name="mobile-filter"
      class="step-container__link"
    >
      {{ searchSel }}
    </OcLink>

    <ul class="step-container__content">
      <li
        v-for="item in list"
        :key="item.value"
        class="step-container__item"
      >
        <OcImg
          :alt="item.name"
          :src="item.img"
          width="80"
          height="65"
        />
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
