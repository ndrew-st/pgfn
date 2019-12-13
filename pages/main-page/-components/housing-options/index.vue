<template>
  <div class="housing-options">
    <h2 class="housing-options__header">
      Варианты жилья в Крыму
    </h2>

    <div class="housing-options__house">
      <div class="housing-options__house_header">
        <h4>Лучшее жилье целиком</h4>
      </div>

      <div class="housing-options__house_list">
        <div class="housing-options__row">
          <OcCard
            v-for="(item, index) of popularRow[0]"
            :key="index"
            type="Апартаменты"
            :name="item.name"
            :city="item.city"
            :image="`/apartments/${item.image}`"
            :price="item.price"
          />
        </div>

        <div class="housing-options__row">
          <OcCard
            v-for="(item, index) of popularRow[1]"
            :key="index"
            type="Апартаменты"
            :name="item.name"
            :city="item.city"
            :image="`/apartments/${item.image}`"
            :price="item.price"
          />
        </div>
      </div>
    </div>

    <div class="housing-options__fresh-offers">
      <div class="housing_options__fresh-offers__header">
        <h4>Свежие предложения</h4>
      </div>

      <div class="housing-options__fresh-offers_list">
        <div class="housing-options__row">
        <OcCard
            v-for="(item, index) of apartmentsRow[0]"
            :key="index"
            type="Апартаменты"
            :name="item.name"
            :city="item.city"
            :image="`/apartments/${item.image}`"
            :price="item.price"
          />
        </div>

        <div class="housing-options__row">
          <OcCard
            v-for="(item, index) of apartmentsRow[1]"
            :key="index"
            type="Апартаменты"
            :name="item.name"
            :city="item.city"
            :image="`/apartments/${item.image}`"
            :price="item.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" src="./index.styl"></style>
