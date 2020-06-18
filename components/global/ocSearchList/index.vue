<template>
  <div class="result">
    <ul
      v-if="content.length"
      class="result__list list"
    >
      <li
        v-for="(item, index) in content"
        :key="index"
        class="result__item item"
      >
        {{ item.title }}
      </li>
    </ul>
    <p
      v-else
      class="result__text text"
    >
      <slot name="nothing">
        <span class="result__text--bold">Ничего не найдено.</span> Попробуйте написать название по-другому или сократить запрос.
      </slot>
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
