<template>
  <div class="checkboxes">
    <ul class="checkboxes__list">
      <li
        v-for="item in items"
        :key="item.name"
        class="checkboxes__item"
      >
        <label
          :class="{ active: currentTab === item.name }"
          class="checkboxes__label"
        >
          <span class="checkboxes__label--text">{{ item.title }}</span>
          <input
            :value="item.name"
            type="radio"
            name="filter-search-check"
            class="visually-hidden"
            @change="$emit('input', item.name)"
          >
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    currentTab: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.checkboxes
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #F3F3F3;
  border-radius: 12px 12px 0px 0px;

  &__list
    display flex
    margin 0
    padding 0 14px

    list-style none

  &__item
    padding 0 10px

  &__label
    display flex
    align-items center
    min-height 56px

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color black-1

    border-bottom 2px solid transparent

    transition all 0.3s ease-in-out 0s
    cursor pointer

    &.active
      border-color $blue

      transition all 0.3s ease-in-out 0s
</style>
