<template>
  <svg
    width="15"
    height="17"
    fill="none"
    viewBox="0 0 15 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7"
      cy="7"
      r="6.3"
      :stroke="color"
      stroke-width="1.4"
    />
    <path
      d="M11 12L14 16"
      :stroke="color"
      stroke-width="1.4"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 15
    },
    height: {
      type: Number,
      default: 17
    }
  }
}
</script>
