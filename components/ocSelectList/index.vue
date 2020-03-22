<template>
  <div class="main-box">
    <div v-if="(type = 'multiselect')">
      <div
        class="list-top"
        @click="isActive = !isActive"
      >
        {{ topLine }}
      </div>

      <div
        class="list-box"
        :class="{ active: isActive }"
      >
        <div
          v-for="item in items"
          :key="item"
          class="list-item"
          :class="{ active: isActive }"
          @click="changeSelect(item)"
        >
          <OcIcon
            v-if="item.flag"
            class="img-v"
            type="nofontawesome"
            icon="v"
          />
          {{ item.name }}
        </div>
      </div>
    </div>

    <div v-else>
      <p>singleSelect</p>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl" scoped></style>
