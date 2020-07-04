<template>
  <div class="select-container">
    <OcDropDown class="select-container__dropdown">
      <OcButton
        slot="button"
        name="drop"
        icon="line-arrow"
        class="select-container__button"
      >
        <p
          v-if="check.length"
          class="select-container__button--cont"
        >
          <span
            v-for="(item, index) in check"
            :key="item"
            class="select-container__button--num"
          >{{ item }}<span v-if="index !== check.length - 1">/</span>&nbsp;
          </span>
        </p>
        <p
          v-else
          class="select-container__button--cont"
        >
          Выберите пункт
        </p>
      </OcButton>
      <div
        slot="body"
        class="select-container__content"
      >
        <ul class="select-container__list">
          <li
            v-for="item in list"
            :key="item.value"
            class="select-container__item"
          >
            <OcInput
              v-model="check"
              icon="check"
              :type="type"
              :label="item.label"
              class="select-container__input"
              icon-position="left"
              :name="name"
              kind="checkbox"
              :check-value="item.value"
            />
          </li>
        </ul>
        <OcButton
          name="transparent"
          class="select-container__save-button"
          @click="finish"
        >
          Готово
        </OcButton>
      </div>
    </OcDropDown>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
