<template>
  <div class="main-box">
    <div v-if="(type = 'multiselect')">
      <div
        class="list-top"
        @click="isActive = !isActive"
      >
        <svg
          class="man"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          style="fill: rgb(166, 166, 166);"
        >
          <g id="__id432_shsy7hgzns"><path
            d="m24 11.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2m0 18c5.95 0 12.2 2.91 12.2 4.2v2.2h-24.4v-2.2c0-1.29 6.25-4.2 12.2-4.2m0-21.8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 18c-5.33 0-16 2.67-16 8v6h32v-6c0-5.33-10.67-8-16-8z"
            style="fill: inherit;"
          /></g>
          <path
            d="m0 0h48v48h-48z"
            style="fill: none;"
          />
        </svg>

        {{ topLine }}

        <svg
          class="arrow-down"
          viewBox="0 0 447.23386953874217 574.9268071968978"
        ><path
          class="DnjQGA"
          d="M225.7352603964467,0L225.5732841918275,0 222.2,0 0,0 222.2,288.31679873533994 0,574.9268071968978 222.2,574.9268071968978 225.5732841918275,574.9268071968978 225.7352603964467,574.9268071968978 447.23386953874217,288.31679873533994Z"
          fill="#a6a6a6"
        /></svg>
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
