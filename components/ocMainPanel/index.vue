<template>
  <div class="main-panel">
    <div class="main-panel__switch">
      <Switcher
        class="main-panel__switch_big"
        :active="activeMenu"
        @click.native="switchMenu" />
      <Switcher
        class="main-panel__switch_mid"
        :active="activeMenu"
        @click.native="activateMenu" />
    </div>

    <div class="main-panel__logo">
      <OcImg src="oc-logo-2.png" />
      <div class="main-panel__logo_title">
        OurCrimea<span>.com</span>
      </div>
    </div>

    <div class="main-panel__search">
      <OcInput
        type="text"
        icon="search"
        icon-position="left"
        class="main-panel__search_item"
        placeholder="Поиск"
      />
    </div>

    <div class="main-panel__seperate"></div>

    <div class="main-panel__item-list"></div>

    <div class="main_menu__user">
      <OcButton
        type="outline"
        color="white"
       >Войти</OcButton>
    </div>

    <MobileMenu
      v-if="config.open"
    />
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
