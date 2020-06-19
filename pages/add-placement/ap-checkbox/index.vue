<template>
  <div>
    <input
      class="ap-checkbox"
      :class="{'ap-row__checkbox--black': checked}"
      @click="checked = !checked"
    >

    <svg
      v-if="checked"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.5L4.5 10.5L12 1"
        stroke="white"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" />
