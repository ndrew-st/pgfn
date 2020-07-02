<template>
  <nuxt-link
    v-bind="$attrs"
    :to="to"
    class="inner-link"
    :class="[classLink]"
    v-on="$listeners"
  >
    <span class="inner-link__container">
      <span
        v-if="icon"
        class="inner-link__icon-container icon-content"
        :class="[icon]"
      >
        <OcIcon
          :name="icon"
        />
      </span>
      <span
        class="inner-link__content text-link"
      >
        <slot />
      </span>
    </span>
  </nuxt-link>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>

<style lang="stylus" src="./styles/footer.styl"/>
<style lang="stylus" src="./styles/header-user.styl"/>
<style lang="stylus" src="./styles/main-card-title.styl"/>
<style lang="stylus" src="./styles/mobile-links.styl"/>
<style lang="stylus" src="./styles/mobile-filter.styl"/>
<style lang="stylus" src="./styles/most.styl"/>
<style lang="stylus" src="./styles/profile.styl"/>
