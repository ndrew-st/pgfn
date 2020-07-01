<template>
  <div class="attrs">
    <p class="attrs__name">
      {{ title }}:
    </p>

    <ul
      v-if="isArray"
      class="attrs__list"
    >
      <li
        v-for="(item, index) in content"
        :key="item"
        class="attrs__item"
      >
        {{ item }}<span v-if="isComma(index)">,&nbsp;</span>
      </li>
    </ul>

    <p
      v-else
      class="attrs__item"
    >
      {{ content }}
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
