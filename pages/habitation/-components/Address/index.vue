<template>
  <p class="address-content">
    <nuxt-link
      :to="`/search?search=${content.country}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content.country }}</span>,
    </nuxt-link>
    <nuxt-link
      :to="`/search?search=${content.region}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content.region }}</span>,
    </nuxt-link>
    <nuxt-link
      :to="`/search?search=${content.city}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content.city }}</span>,
    </nuxt-link>
    <nuxt-link
      :to="`/search?search=${content.street}`"
      class="address-content__link"
    >
      <span class="address-content__link--text text-link">{{ content.street }} {{ content.house }}</span>
    </nuxt-link>
  </p>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
