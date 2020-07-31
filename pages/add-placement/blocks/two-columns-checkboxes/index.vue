<template>
  <div class="two-column-checkboxes">
    <p class="add-placement__h2">
      {{ titleBlock }}
      <span
        v-if="redStar"
        class="add-placement__red-star"
      >*</span>
    </p>

    <ul class="two-column-checkboxes__ul">
      <li
        v-for="item in list"
        :key="item.value"
        class="two-column-checkboxes__item"
      >
        <!-- <OcCheckbox
          v-model="checkedItems"
          kind="most"
          icon="check"
          :label="item.label"
          :check-value="item.value"
        /> -->

        <ApCheckbox
          v-if="!noParams"
          :par-name="item.value"
          :store="store"
          @change="change"
        >
          {{ item.label }}
        </ApCheckbox>

        <ApCheckbox
          v-if="noParams"
          :store="store"
          @change="$emit('change', $event, item.value)"
        >
          {{ item.label }}
        </ApCheckbox>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus"/>
