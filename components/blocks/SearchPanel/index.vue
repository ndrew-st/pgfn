<template>
  <div class="search-panel">
    <div class="search-panel__input-block">
      <OcInput
        v-model="search"
        kind="search"
        icon="find"
        icon-position="right"
        placeholder="Укажите город или направление"
        @input="handlerSearch"
      />
    </div>
    <ul
      v-if="list.length"
      class="search-panel__list"
    >
      <li
        v-for="item in list"
        :key="item.id"
        class="search-panel__item"
      >
        <OcButton
          name="list"
          @click="select(item.title)"
        >
          {{ item.title }}
        </OcButton>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js" />
<style lang="stylus" src="./index.styl" />
