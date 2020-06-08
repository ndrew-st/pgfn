<template>
  <button
    :type="type"
    :class="[buttonClass, addClass, { 'active': active, 'selected': selected }]"
    :disabled="disabled"
    v-on="$listeners"
  >
    <OcIcon
      v-if="icon.length"
      class="icon-content"
      :class="icon"
      :name="icon"
    />
    <span class="oc-button__text text-content">
      <slot>click</slot>
    </span>
  </button>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>

<style lang="stylus" src="./styles/border.styl"/>
<style lang="stylus" src="./styles/carousel.styl"/>
<style lang="stylus" src="./styles/counter.styl"/>
<style lang="stylus" src="./styles/filter.styl"/>
<style lang="stylus" src="./styles/geo.styl"/>
<style lang="stylus" src="./styles/list.styl"/>
<style lang="stylus" src="./styles/most.styl"/>
<style lang="stylus" src="./styles/pagination.styl"/>
<style lang="stylus" src="./styles/search.styl"/>
<style lang="stylus" src="./styles/transparent.styl"/>
