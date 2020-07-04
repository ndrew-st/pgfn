<template>
  <div class="req-step1__flex">
    <div class="req-step1__col1">
      <p class="add-placement__h">
        Расположение и собственность
      </p>

      <p class="add-placement__p req-step1__p1">
        Район, населенный пункт
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput
        placeholder="Москва"
        :class="req-step1__input1"
      />

      <p class="add-placement__p req-step1__p2">
        Точный адрес
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput :class="req-step1__input2" />

      <p class="add-placement__p req-step1__p3">
        Указать на карте
      </p>

      <yandex-map
        :coords="coords"
        class="req-step1__yandex-map-content"
        @map-was-initialized="initMap"
      >
        <ymap-marker
          marker-id="1"
          :coords="coords"
        />
      </yandex-map>
    </div>

    <div class="req-step1__col2">
      <p class="add-placement__h2 req-step1__right-title">
        Инфраструктура поблизости
      </p>

      <CheckboxesList :list="infrastructure" />

      <p class="add-placement__h2">
        Природа
      </p>

      <CheckboxesList :list="nature" />

      <OcButton
        v-if="selItem2 !== ''"
        name="most"
        color="red"
        class="req-step1__button-next"
        @click.native="$emit('next')"
      >
        Продолжить
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js" />

<style src="./index.styl" lang="stylus"/>
