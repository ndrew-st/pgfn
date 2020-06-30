<template>
    <div
      v-if="formValues[params.depend]"
      class="checkbox">
      <div
        v-if="params.label"
        class="checkbox__header">
        <p class="checkbox__header--title">{{params.label}}</p>
        <p
          v-if="params.desc"
          class="checkbox__header--desc">{{params.desc}}</p>
      </div>
      <label
        v-for="(item, index) in params.children"
        :key="index"
        class="checkbox__label">
        <input
          :name="name"
          :value="item.name"
          v-model="checked"
          class="checkbox__input"
          type="checkbox">
        <span class="checkbox__desc">
          <i class="checkbox__desc--label">{{item.label}}</i>
          <i class="checkbox__desc--sub-label">{{item.desc}}</i>
        </span>
      </label>
    </div>
</template>

<script>
export default {
  name: 'CheckBoxes',
  inject: {
    formValues: {
      default: {}
    }
  },
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    },
    setValue: {
      type: Array,
      default: () => []
    }
  },
  $_veeValidate: {
    // value getter
    value () {
      return this.checked
    },
    // name getter
    name () {
      return this.name
    }
  },
  data () {
    return {
      checked: this.setValue || []
    }
  },
  watch: {
    checked (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="stylus">
.checkbox
  &__header
    margin-bottom 10px

    &--title
      margin-bottom: 5px;

      font-size: 20px;
      font-weight: 700;
      color: rgb(84, 84, 84);

    &--desc
      margin-bottom: 5px;

      font-size 15px
      font-weight 400
      color rgb(166, 166, 166)
      text-decoration none

  &__label
    display flex
    max-width 350px
    margin-bottom 10px

    cursor pointer

  &__input
    float left

  &__desc
    &--label
      display block
      margin-bottom: 3px;

      font-weight: 400;
      color: rgb(84, 84, 84);
      text-decoration: none;
      font-size: 15px;

    &--sub-label
      display block

      font-weight: 400;
      color: rgb(166, 166, 166);
      text-decoration: none;
      font-size: 12px
</style>
