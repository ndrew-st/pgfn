<template>
  <div class="main-menu">
    <div class="main-menu__logo">
      <OcImg src="oc-logo-2.png" />
    </div>

    <div class="main-menu__search">
      <OcInput
        type="text"
        icon="search"
        icon-position="left"
        placeholder="Поиск"
      />
    </div>

    <div class="main-menu__seperate"></div>

    <div class="main-menu__item-list">
      <div class="main-menu__item">Проживание</div>

      <div class="main-menu__item">Впечатления</div>

      <div class="main-menu__item">Питание</div>

      <div class="main-menu__item">Места</div>

      <div class="main-menu__item">Поддержка</div>
    </div>

    <div class="main_menu__user">
      <OcButton
        type="outline"
        color="white"
       >Войти</OcButton>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
