<template>
  <div class="search-screen">
    <div class="search-screen__form">
      <h3 class="search-screen__header">
        Бронируй жилье и впечатления в Крыму
      </h3>

      <div class="search-screen__row">
        <OcInput
          label="Где"
          class="search-screen__form_input"
          placeholder="Весь Крым"
        />
      </div>

      <div class="search-screen__row">
        <OcInput
          label="Прибытие"
          class="search-screen__form_input"
          placeholder="дд.мм.гггг"
        />

        <OcInput
          label="Выезд"
          class="search-screen__form_input"
          placeholder="дд.мм.гггг"
        />
      </div>

      <div class="search-screen__row">
        <OcInput
          label="Гости"
          class="search-screen__form_input"
          placeholder="Взрослых"
        />

        <OcInput
          label=" "
          class="search-screen__form_input"
          placeholder="Детей"
        />
      </div>

      <div class="search-screen__row">
        <OcButton
          class="search-screen__row_button"
          color="orange">Найти</OcButton>
        <OcButton
          class="search-screen__row_button"
          color="violete">Создать тур</OcButton>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
