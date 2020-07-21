<template>
  <div class="count-bed">
    <p class="count-bed__title-count">
      Количество спальных мест: {{ resultLength }}
    </p>

    <p class="count-bed__title">
      Спальное место
    </p>

    <div class="count-bed__content">
      <ul class="count-bed__list">
        <li
          v-for="bed in beds"
          :key="bed.value"
          class="count-bed__item"
        >
          <Counter
            class="count-bed__counter"
            :title="bed.title"
            :value="bed.value"
            @input="change"
          />
        </li>
      </ul>
    </div>

    <div class="count-bed__add-block add-block">
      <OcDropDown>
        <OcButton
          slot="button"
          class="add-block__button"
          name="border"
        >
          Добавить тип спального места
        </OcButton>

        <OcSelectList
          slot="body"
          class="add-block__content"
          :content="content"
          @input="select"
        />
      </OcDropDown>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
