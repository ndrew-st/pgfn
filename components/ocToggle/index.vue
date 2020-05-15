<template>
  <div class="toggle">
    <label
      class="toggle__label"
      :class="{ checked: check }"
    >
      <input
        v-model="check"
        type="checkbox"
        :name="name"
        :value="value"
        class="visually-hidden"
        @change="$emit('input', check)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: 'value'
    }
  },
  data () {
    return {
      check: this.checked || false
    }
  }
}
</script>

<style lang="stylus" scoped>
.toggle
  width: 48px
  height: 28px

  &__label
    position: relative;

    display block
    width: 48px
    height: 28px

    background: #989BA8;
    border-radius: 30px;
    cursor: pointer;
    box-sizing: border-box;
    transition all 0.3s ease-in-out 0s

    &:before
      content: ''
      position: absolute;

      left 1px
      top: 0
      right auto
      bottom: 0

      width: 26px
      height: 26px
      margin auto 0

      background: #FFFFFF;
      border-radius: 19px;
      transition all 0.3s ease-in-out 0s

    &.checked
      background #5604C1
      transition all 0.3s ease-in-out 0s

      &:before
        left auto
        right 0.7px

        transition all 0.3s ease-in-out 0s
</style>
