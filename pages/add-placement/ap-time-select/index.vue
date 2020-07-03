<template>
  <div>
    <select
      v-model="locSelTime"
      class="ap-time-select__sel"
      @change="$emit('change', $event.target.value)"
    >
      <option
        v-for="(item, index) in timeArray"
        :key="index"
      >
        {{ item }}
      </option>
    </select>

    <!-- <hr>
    <p>locSelTime: {{ locSelTime }}</p>
    <p>selTime: {{ selTime }}</p> -->
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
