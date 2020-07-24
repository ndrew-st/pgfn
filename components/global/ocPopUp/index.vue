<template>
  <div
    v-if="getStatus(name)"
    class="popup"
  >
    <div
      class="popup__wrapper"
      @click.self="close"
    >
      <component
        :is="name"
        class="popup__content"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
