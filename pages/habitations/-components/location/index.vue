<template>
  <div>
    <p class="loc__h">
      Расположение
    </p>

    <div class="loc__flex loc__mt28">
      <span
        v-for="(place, index) in location"
        :key="index"
      >
        <a
          href="#"
          class="loc__a"
        >
          {{ place }}
        </a>

        <span
          v-if="location.length - 1 > index"
          class="loc__span"
        >, </span>
      </span>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped/>

<script src="./index.js"/>
