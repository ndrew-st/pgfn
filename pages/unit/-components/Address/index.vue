<template>
  <p class="address-content">
    <nuxt-link
      :to="`/search?search=${content && content.country}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">
        {{ content && content.country }}
        <span
          v-if="content.region"
          class="address-content__link--comma"
        >,</span>
      </span>
    </nuxt-link>
    &nbsp;
    <nuxt-link
      :to="`/search?search=${content && content.region}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">
        {{ content && content.region }}
        <span
          v-if="content.city"
          class="address-content__link--comma"
        >,</span>
      </span>
    </nuxt-link>
    &nbsp;
    <nuxt-link
      v-if="content.city"
      :to="`/search?search=${content && content.city}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">
        {{ content && content.city }}
        <span
          v-if="content.street"
          class="address-content__link--comma"
        >,</span>
      </span>
    </nuxt-link>
    &nbsp;
    <nuxt-link
      v-if="content.street"
      :to="`/search?search=${content && content.street}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content && content.street }} {{ content && content.house }}</span>
    </nuxt-link>
  </p>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
