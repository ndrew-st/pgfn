<template>
  <div
    class="sel-input"
    :class="{red: stage === '3', norm: stage !== '3'}"
  >
    <select
      class="sel"
    >
      <option>
        +7
      </option>
    </select>

    <input
      v-model="phone"
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
