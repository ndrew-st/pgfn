<template>
  <div class="apartments-filter">
    <ul class="apartments-filter__list">
      <li
        v-for="item in items"
        :key="item.name"
        :class="{ 'apartments-filter__item--desktop': item.desktop }"
        class="apartments-filter__item unit-filter"
      >
        <OcDropDown v-show="isShow(item.name)">
          <template #button="{ show }">
            <Toggle
              :active="show"
              :selected="isSelected(item.name)"
              @clear="clear(item.name)"
            >
              {{ item.title }}
            </Toggle>
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
