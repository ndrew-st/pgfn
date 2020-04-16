<template>
  <div
    class="sel-input"
    :class="{red: error === 'wrongNumber', norm: error !== 'wrongNumber'}"
  >
    <select
      class="sel"
    >
      <option>
        +7
      </option>
    </select>

    <input
      v-model="phone1"
      class="input"
      type="text"
      @input="mask"
    >
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
