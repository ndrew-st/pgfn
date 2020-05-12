<template>
  <div class="apartments-filter">
    <ul class="apartments-filter__list">
      <li
        v-for="item in items"
        :key="item.name"
        :class="{ 'apartments-filter__item--desktop': item.desktop }"
        class="apartments-filter__item unit-filter"
      >
        <ocDropDown>
          <template #button="{ show }">
            <button
              slot="button"
              type="button"
              class="unit-filter__button"
              :class="{ 'selected-button': isSelected(item.name), 'active-button': show }"
            >
              {{ item.title }}
            </button>
          </template>
          <component
            :is="item.name"
            slot="body"
            :value="result[item.name]"
            class="unit-filter__content"
            @input="updateValue(item.name, $event)"
          />
        </ocDropDown>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
