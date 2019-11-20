<template>
  <div class="search-screen">
    <div class="search-screen__form">
      <h3 class="search-screen__header">
        Бронируй жилье и впечатления в Крыму
      </h3>

      <div class="search-screen__row">
        <OcInput
          label="Где"
          placeholder="Весь Крым"
        />
      </div>

      <div class="search-screen__row">
        <OcInput
          label="Прибытие"
          class="search-screen__form_right"
          placeholder="дд.мм.гггг"
        />

        <OcInput
          label="Выезд"
          class="search-screen__form_left"
          placeholder="дд.мм.гггг"
        />
      </div>

      <div class="search-screen__row">
        <OcInput
          label="Гости"
          placeholder="Гости"
        />
      </div>

      <div class="search-screen__row">
        <OcButton>Найти</OcButton>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
