<template>
  <p class="address-content">
    <nuxt-link
      :to="`/search?search=${content && content.country}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content && content.country }}</span>,
    </nuxt-link>
    <nuxt-link
      :to="`/search?search=${content && content.region}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content && content.region }}</span>,
    </nuxt-link>
    <nuxt-link
      :to="`/search?search=${content && content.city}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content && content.city }}</span>,
    </nuxt-link>
    <nuxt-link
      :to="`/search?search=${content && content.street}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content && content.street }} {{ content && content.house }}</span>
    </nuxt-link>
  </p>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
