<template>
  <div class="apartment-description">
    <H1>H1 apartment-description</H1>
    <p>
      <span
      v-for="(item, index) in fullPath"
      :key="index">
      <span v-if="index < (fullPath.length - 1)"> {{ item }} / </span>
      <span v-else>{{ item }}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['fullPath']
}
</script>
