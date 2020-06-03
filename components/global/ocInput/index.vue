<template>
  <component
    :is="kind"
    v-model="val"
    v-bind="$attrs"
    :value="value"
    @input="throttledSearch"
    @key-down="keyDown"
    @focus="$emit('focus', $event)"
  />
</template>

<script src="./index.js"/>
