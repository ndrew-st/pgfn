<template>
  <div
    tabindex="0"
    class="direction"
    @blur.capture="touched = false"
  >
    <h3 class="direction__title">
      Где
    </h3>
    <form
      class="direction__form"
      @submit.prevent="handlerSubmit"
    >
      <label class="direction__label">
        <input
          v-model="text"
          type="text"
          placeholder="Где угодно"
          class="direction__input"
          @input="throttledSearch"
        >
      </label>
      <div
        v-if="touched && result.length"
        class="direction__result dir-result"
      >
        <ul class="dir-result__list">
          <li
            v-for="item in result"
            :key="item.title"
            class="dir-result__item"
          >
            <nuxt-link
              class="dir-result__link"
              to="/"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <button class="direction__submit">
        Поиск
      </button>
    </form>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped>
