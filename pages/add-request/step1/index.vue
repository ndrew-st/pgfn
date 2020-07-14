<template>
  <div class="req-step1__flex">
    <div class="req-step1__col1">
      <p class="add-placement__h">
        Расположение и собственность
      </p>

      <!-- <p class="add-placement__p req-step1__p1">
        Район, населенный пункт
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput
        placeholder="Москва"
        :class="req-step1__input1"
      /> -->

      <p class="add-placement__p req-step1__p2">
        Точный адрес
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput
        :value="inputAdress"
        @input="askDadata($event)"
      />

      <ApDadataDropdown
        v-if="adressList"
        :list="adressList"
        @selectAdress="selectAdress"
      />

      <div class="flex">
        <p
          v-if="unknownHouse !== null"
          class="ap-red-p"
        >
          Мы не уверены, что такой дом существует. Проверьте, нет ли ошибки
        </p>
      </div>

      <p class="add-placement__p req-step1__p3">
        Указать на карте
      </p>

      <yandex-map
        :coords="coords"
        class="ap-step1__yandex-map-content"
        @map-was-initialized="initMap"
        @click="clickMap"
      >
        <ymap-marker
          :coords="coords"
          marker-id="123"
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

<style src="../../add-placement/step1/index.styl" lang="stylus"/>
