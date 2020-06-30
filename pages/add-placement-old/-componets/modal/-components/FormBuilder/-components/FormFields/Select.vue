<template>
  <div
    v-if="!isHide"
    :class="{ string: !params.main }"
    class="select">
    <template v-if="params.label">
      <div
        v-if="params.main"
        class="select__main-label-container">
        <p class="select__title">{{params.label}}</p>
        <span
          v-if="params.desc"
          class="select__desc">{{params.desc}}</span>
      </div>
      <div
        v-else
        class="select__label-container">
        <p class="select__sub-label">{{params.label}}</p>
      </div>
    </template>
    <span
      v-if="params.validation === 'required'"
      class="select__required">*</span>
    <label class="select__label">
      <select
        ref="selRef"
        @change="$emit('input', $event.target.value)"
        v-model="selected"
        class="select__content">
        <option
          v-if="params.placeholder && !setValue"
          value=""
          selected
          disabled
          hidden>{{params.placeholder}}</option>
        <option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
          class="select__option">{{item.name}}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Select',
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
      type: String,
      default: ''
    }
  },
  $_veeValidate: {
    // value getter
    value () {
      return this.selected
    },
    // name getter
    name () {
      return this.name
    }
  },
  data () {
    return {
      selected: this.setValue || '',
      options: this.params.options || [] // Component get or options(array) or request(string)(for get options)
    }
  },
  computed: {
    isHide () {
      if (this.params.depend) {
        return !this.formValues[this.params.depend]
      } else {
        return false
      }
    }
  },
  created () {
    if (this.params.request) { // If have request need to get data
    }
  }
}
</script>

<style lang="stylus">
.select
  position: relative

  &.string
    width 400px
    display flex
    align-items center
    justify-content space-between

  &__main-label-container
    display block

  &__label-container
    float: left;

  &__title
    margin-bottom: 5px;

    font-size: 20px;
    font-weight: 700;
    color: rgb(84, 84, 84);

  &__desc
    margin-bottom: 5px;

    font-size: 15px;
    font-weight: 400;
    aSdzcxcolor: rgb(166, 166, 166);
    text-decoration: none;

  &__label
    position relative

  &__required
    position absolute
    top 0
    bottom 0
    left -15px

    display table-cell
    vertical-align middle
    margin auto 0
    height 20px
    margin-top 6px

    color red
    font-size 15px

  &__content
    width 200px
    height 25px
    padding-left: 5px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    cursor: pointer;
</style>
