<template>
  <svg
    width="100%"
    height="6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      class="outer"
      x="0.5"
      y="0.5"
      width="100%"
      height="5"
      rx="2.5"
      fill="white"
      stroke="#ECECEC"
    />
    <rect
      class="inner"
      x="1"
      y="1"
      :width="width + '%'"
      height="4"
      rx="2"
      fill="#3D88C8"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  svg
    width 100%

    overflow visible
  .outer
    width calc(100% + 1px)

    box-sizing border-box

  .inner
    box-sizing border-box
</style>
