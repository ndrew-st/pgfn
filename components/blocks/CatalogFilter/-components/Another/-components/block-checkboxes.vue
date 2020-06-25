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

<script>
export default {
  name: 'BlockCheckboxes',
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    more: {
      type: Boolean,
      default: false
    },
    checkboxes: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.checkboxes
  position relative
  padding 24px 0

  border-bottom 1px solid #F3F3F3

  &.more
    padding-bottom 41px

  &__title
    margin: 0
    margin-bottom: 20px

    font-style: normal
    font-weight: bold
    font-size: 15px
    line-height: 20px
    color: #272528

  &__list
    margin 0
    padding 0

    list-style none

  &__item
    margin-bottom: 16px

    &:last-child
      margin-bottom: 0

  &__more
    position absolute
    left 0
    right 0
    bottom -18px

    margin 0 auto

@media (min-width 640px)
  .checkboxes
    padding 36px 0

    &__title
      margin-bottom: 24px

      font-size: 18px;

    &__list
      display flex
      flex-wrap wrap

    &__item
      width: 49%

    &.more
      padding-bottom 55px
</style>
