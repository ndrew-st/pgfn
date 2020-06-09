<template>
  <div class="dropdown">
    <span
      class="dropdownbtn"
      @click="toggle"
    >
      <slot
        :show="isShow"
        name="button"
      />
    </span>

    <transition name="fade">
      <div
        v-if="isShow"
        class="dropdowncontent"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
