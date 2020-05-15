<template>
  <div class="search-panel">
    <div class="search-panel__input-block input-block">
      <OcIcon
        v-if="!search.length"
        class="input-block__icon input-block__icon--find"
        name="find"
      />
      <OcIcon
        v-else
        class="input-block__icon input-block__icon--clear"
        name="clear"
        @click.native="clear"
      />
      <label class="input-block__label">
        <input
          v-model="search"
          type="text"
          placeholder="Укажите город или направление"
          class="input-block__input"
          @input="throttledSearch"
          @keydown="handlerKeyDown"
        >
      </label>
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
        <button
          type="button"
          class="search-panel__button"
          @click="select(item.title)"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js" />
<style lang="stylus" src="./index.styl" />
