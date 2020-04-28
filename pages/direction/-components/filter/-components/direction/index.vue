<template>
  <div class="direction">
    <h3 class="direction__title">Где</h3>
    <form
      @submit.prevent="handlerSubmit"
      class="direction__form">
      <label class="direction__label">
        <input
          v-model="text"
          @input="throttledSearch"
          type="text"
          placeholder="Где угодно"
          class="direction__input">
      </label>
      <div
        v-if="touched && result.length"
        class="direction__result dir-result">
        <ul class="dir-result__list">
          <li
            v-for="item in result"
            :key="item.title"
            class="dir-result__item">
            <nuxt-link
              class="dir-result__link"
              to="/">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <button class="direction__submit">Поиск</button>
    </form>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped>
