<template>
  <label class="select-label">
    <select
      @change="$emit('input', $event.target.value)"
      v-model="selected"
      class="select-input">
      <option
        value=""
        selected
        disabled
        hidden>Добавить помещение</option>
      <option
        v-for="option in options"
        :key="option.name"
        :value="option.name">{{option.name}}</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'AddRoom',
  data () {
    return {
      selected: '',
      options: [
        { name: 'Гостинная' },
        { name: 'Спальня' },
        { name: 'Детская' },
        { name: 'Произвольное поле' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .select-input {
    width 200px
    height 25px
    padding-left: 5px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    cursor: pointer;
  }
</style>
