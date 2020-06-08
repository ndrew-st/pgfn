<template>
  <div class="apartments-filter">
    <ul class="apartments-filter__list">
      <li
        v-for="item in items"
        :key="item.name"
        :class="{ 'apartments-filter__item--desktop': item.desktop }"
        class="apartments-filter__item unit-filter"
      >
        <OcDropDown>
          <template #button="{ show }">
            <OcButton
              slot="button"
              name="filter"
              class="unit-filter__button"
              :active="show"
              :selected="isSelected(item.name)"
            >
              {{ item.title }}
            </OcButton>
          </template>
          <component
            :is="item.name"
            slot="body"
            :value="result[item.name]"
            class="unit-filter__content"
            @input="updateValue(item.name, $event)"
          />
        </OcDropDown>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
