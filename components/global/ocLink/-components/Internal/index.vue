<template>
  <nuxt-link
    v-slot="{ href, navigate, isActive }"
    :to="to"
    class="inner-link"
    :class="[classLink]"
  >
    <span class="inner-link__container">
      <span
        class="inner-link__icon-container icon-content"
        :class="[icon, { 'active': isActive }]"
      >
        <slot name="icon" />
      </span>
      <a
        :href="href"
        class="inner-link__content text-link"
        :class="{ 'active': isActive }"
        @click="navigate"
      >
        <slot />
      </a>
    </span>
  </nuxt-link>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>

<style lang="stylus" src="./styles/mobile-links.styl"/>
<style lang="stylus" src="./styles/header-user.styl"/>
<style lang="stylus" src="./styles/most.styl"/>
<style lang="stylus" src="./styles/main-card-title.styl"/>
<style lang="stylus" src="./styles/mobile-filter.styl"/>
<style lang="stylus" src="./styles/footer.styl"/>
<style lang="stylus" src="./styles/profile.styl"/>
