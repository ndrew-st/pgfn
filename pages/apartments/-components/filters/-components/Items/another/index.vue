<template>
  <div
    class="another"
    @click.self="$root.$emit('dropdown:hide')"
  >
    <div class="another__container">
      <div class="another__header another-header">
        <button
          type="button"
          class="another-header__close"
          @click="$root.$emit('dropdown:hide')"
        >
          закрыть
        </button>
        <h3 class="another-header__title">
          Другие фильтры
        </h3>
      </div>
      <div class="another__controls another-controls">
        <ul class="another-controls__list">
          <li
            v-for="item in list"
            :key="item.name"
            class="another-controls__item"
          >
            <label
              class="another-controls__label"
              :class="{ 'checkbox-checked': active === item.name }"
            >
              {{ item.title }}
              <input
                v-model="active"
                type="radio"
                :name="name"
                :value="item.name"
                class="visually-hidden"
              >
            </label>
          </li>
        </ul>
      </div>
      <component
        :is="active"
        class="another__content"
      />
      <div class="another__footer another-footer">
        <button
          type="button"
          class="another-footer__button another-footer__button--clear"
        >
          Очистить всё
        </button>
        <button
          type="button"
          class="another-footer__button another-footer__button--show"
        >
          Показать {{ `${count} ${variant(count)}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
