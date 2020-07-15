<template>
  <div class="habitation-top">
    <div class="habitation-top__container">
      <a
        href="#"
        class="habitation-top__prev-button"
        @click.prevent="$router.go(-1)"
      >
        prev
      </a>
      <span
        v-for="(item, index) in topPath"
        :key="index"
        class="habitation-top__path"
      >
        <nuxt-link
          class="habitation-top__path--link"
          :to="item.url"
        >{{ item.title }}</nuxt-link>
        {{ topPath.length === index + 1 ? '' : ` &middot; ` }}
      </span>
    </div>

    <div class="habitation-top__btns">
      <OcButton
        name="border"
        class="habitation-top__btn"
      >
        Сохранить
      </OcButton>

      <OcButton
        class="habitation-top__btn habitation-top__btn--complain"
        name="border"
      >
        Пожаловаться
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
