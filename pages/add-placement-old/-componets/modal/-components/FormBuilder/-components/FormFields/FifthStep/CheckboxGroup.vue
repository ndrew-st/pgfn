<template>
  <div class="checkbox-group">
    <h3 class="checkbox-group__title">{{params.label}}</h3>
    <div class="checkbox-group__container">
      <label
        v-for="(checkbox, index) in params.children"
        :key="index"
        class="checkbox-group__label">
        <input
          :name="name"
          :value="checkbox.value"
          v-model="checkedList"
          class="checkbox-group__input"
          type="checkbox">
        {{checkbox.label}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    params: {
      type: Object,
      default: () => {
      }
    },
    setValue: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checkedList: this.setValue || []
    }
  },
  watch: {
    checkedList (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="stylus">
  .checkbox-group
    margin-top 20px

    &__title
      font-size 15px
      font-weight 700
      color rgb(84, 84, 84)

    &__container
      max-width 400px
      display flex
      flex-wrap wrap
      justify-content space-between

    &__label
      position: relative;
      display block
      width 180px
      /*padding-left: 20px*/

      font-weight 400
      font-size 14px
      color rgb(166, 166, 166)

      box-sizing: border-box;

      cursor pointer

      /* &:before
        content ''
        position absolute
        top 0
        left 3px
        bottom 0

        width 10px
        height 10px
        margin auto 0

        border 1px solid rgb(166, 166, 166)
        border-radius 3px

      &:after
        content ''
        position absolute
        top 0
        bottom 0
        left 6.5px

        width 6px
        height 6px
        margin auto 0

        background-image: url('/modal/checked-flag.svg')
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 6px 6px;

    &__input
      position: absolute !important;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden; */
</style>
