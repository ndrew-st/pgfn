<template>
  <div class="where-to-go">
    <h2 class="where-to-go__header">
      Куда отправиться?
    </h2>

    <div class="where-to-go__list">
      <div class="where-to-go__list_row">
        <div
          v-for="(city, index) of bigCities"
          :key="index"
          class="where-to-go__list_item"
        >
          <div class="where-to-go__big-image_wrapper">
            <OcImg
              :src="city.image"
              class="where-to-go__image"
            />
          </div>

          <div class="where-to-go__item_description">
            <div class="where-to-go__item_header">{{ city.name }}</div>

            <div class="where-to-go__item_objects">{{ city.count }} объектов</div>
          </div>
        </div>
     </div>

      <div class="where-to-go__list_row">
        <div
          v-for="(city, index) of smallCities"
          :key="index"
          class="where-to-go__list_item"
        >
          <div class="where-to-go__small-image_wrapper">
            <OcImg
              :src="city.image"
              class="where-to-go__image"
            />
          </div>

          <div class="where-to-go__item_description">
            <div class="where-to-go__item_header">{{ city.name }}</div>

            <div class="where-to-go__item_objects">{{ city.count }} объектов</div>
          </div>
        </div>
     </div>
    </div>

    <router-link to="/">Смотреть все направления (235 городов)</router-link>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
