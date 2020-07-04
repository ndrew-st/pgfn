<template>
  <div
    class="checkboxes"
    :class="{ more: more }"
  >
    <h3 class="checkboxes__title">
      {{ title }}
    </h3>
    <ul class="checkboxes__list">
      <li
        v-for="item in checkboxes"
        :key="item.value"
        class="checkboxes__item"
      >
        <OcInput
          type="checkbox"
          kind="checkbox"
          icon="check"
          icon-position="left"
          :name="name"
          :label="item.label"
          :check-value="item.value"
          @input="$emit('input', $event)"
        />
      </li>
    </ul>
    <OcButton
      v-if="more"
      name="border"
      add-class="more"
      class="checkboxes__more"
    >
      Показать ещё {{ count }}
    </OcButton>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
