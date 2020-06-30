<template>
  <div
    :class="{ required: params.validation === 'required' }"
    class="modal-input">
    <span class="modal-input__title">{{params.label}}</span>
    <p class="modal-input__container">
      <label>
        <input
          @input="$emit('input', $event.target.value)"
          v-model="value"
          :class="{ half: params.size === 'half' }"
          :type="params.type || 'text'"
          class="modal-input__content">
      </label>
      <span
        v-if="params.measure"
        v-html="measure"
        class="modal-input__measure"/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    params: {
      type: Object,
      default: () => {
      }
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
      return this.value
    },
    // name getter
    name () {
      return this.name
    }
  },
  data () {
    return {
      value: this.setValue || ''
    }
  },
  computed: {
    measure () {
      if (this.params.measure) { // think about this moment
        const arrMeasure = this.params.measure.split('')
        return `${arrMeasure[0]}<sup>${arrMeasure[1]}</sup>`
      } return null
    }
  }
}
</script>

<style lang="stylus">
  .modal-input
    display flex
    align-items center
    justify-content space-between
    max-width 400px

    &.required
      position: relative;

      &:before
        content '*'
        position: absolute;

        left -15px
        top 0
        bottom 0

        margin auto 0

        color red

    &__container
      width 200px

    &__content
      width 140px
      height 30px
      padding-left: 5px;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 3px;

      cursor: pointer;

      &.half
        width 70px;
</style>
