<template>
    <div class="radio-button">
      <p class="radio-button__title">{{params.label}}</p>
      <label
        v-for="(checkbox, index) in params.children"
        :key="index"
        class="radio-button__label">
        <input
          :name="name"
          :value="checkbox.name"
          :checked="checkbox.checked"
          v-model="checked"
          class="radio-button__input"
          type="radio">
        {{checkbox.label}}
      </label>
    </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    setValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checked: this.setValue || null
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
.radio-button
  &__title
    margin-bottom: 5px;

    font-weight: 700;
    color: rgb(84, 84, 84);
    text-decoration: none;
    font-size: 15px;

  &__label
    cursor pointer
</style>
