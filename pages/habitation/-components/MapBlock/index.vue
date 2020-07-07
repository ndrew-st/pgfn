<template>
  <div class="habitation-map">
    <p class="habitation-map__address">
      <nuxt-link
        to="/"
        class="habitation-map__link"
      >
        <span class="habitation-map__link--text text-link">{{ content.country }}</span>,
      </nuxt-link>
      <nuxt-link
        to="/"
        class="habitation-map__link"
      >
        <span class="habitation-map__link--text text-link">{{ content.region }}</span>,
      </nuxt-link>
      <nuxt-link
        to="/"
        class="habitation-map__link"
      >
        <span class="habitation-map__link--text text-link">{{ content.city }}</span>,
      </nuxt-link>
      <nuxt-link
        to="/"
        class="habitation-map__link"
      >
        <span class="habitation-map__link--text text-link">{{ content.street }} {{ content.house }}</span>
      </nuxt-link>
    </p>
    <OcMaps
      class="habitation-map__content"
      :coords="content.coords"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
