<template>
  <div class="add-photo__block">
    <img
      v-if="src !== ''"
      :src="src"
      :alt="alt"
      class="add-photo__img"
    >
    <label
      v-if="src === ''"
      class="add-photo__round-btn"
    >
      <input
        ref="files"
        type="file"
        class="add-photo__input"
        multiple
        @change="handleFilesUpload()"
      >
    </label>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
