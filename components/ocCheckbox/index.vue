<template>
  <div class="checkbox">
    <label
      class="checkbox__label"
      :class="{ checked: check, responsive: responsive }"
    >
      <Icon
        name="check"
        :class="{ responsive: responsive }"
        class="checkbox__icon"
      />
      {{ label }}
      <input
        v-model="check"
        type="checkbox"
        :name="name"
        :value="value"
        class="visually-hidden"
        @change="$emit('input', value)"
      >
    </label>
  </div>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  name: 'Checkbox',
  components: { Icon },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    responsive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      check: this.checked || false
    }
  }
}
</script>

<style lang="stylus">
.checkbox
  &__icon
    position: absolute;
    left: 6px
    top: 0
    bottom: 0

    display flex
    align-items center
    margin auto 0

    & svg path
      stroke white

    &.responsive
      left auto
      right 5px
  &__label
    position relative

    display flex
    height: 24px
    align-items center
    padding-left: 40px

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #272528;

    cursor: pointer;
    transition all 0.3s ease-in-out 0s

    &:before
      content ''

      position: absolute;
      left 0
      top 0
      bottom 0

      width: 24px
      height: 24px
      margin auto 0

      background: #FFFFFF;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer

    &:hover:before
      border 2px solid #272528

    &.checked
      &:before
        background-color black
        border 2px solid #272528

    &.responsive
      padding-left 0

      &:before
        left auto
        right 0

@media (min-width 640px)
  .checkbox

    &__icon

      &.responsive
        right auto
        left 6px

    &__label
      font-size 16px

      &.responsive
        padding-left 40px

        &:before
          left 0
          right auto
</style>
