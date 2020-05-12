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
        <ocCheckbox
          :name="name"
          :label="item.label"
          :value="item.value"
          :responsive="true"
          @input="$emit('input', $event)"
        />
      </li>
    </ul>
    <button
      v-if="more"
      type="button"
      class="checkboxes__more"
    >
      Показать ещё {{ count }}
    </button>
  </div>
</template>

<script>
import ocCheckbox from '~/components/ocCheckbox'

export default {
  name: 'BlockCheckboxes',
  components: { ocCheckbox },
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

    height 36px
    padding 0 16px
    margin 0 auto

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #000000;

    background: #FFFFFF;
    border: 1px solid #F3F3F3;
    box-sizing: border-box;
    border-radius: 44px;
    cursor: pointer;

    &:hover
    &:focus
      outline 0

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

    &__more
      height: 40px
      padding: 0 12px

      font-size: 14px
</style>
