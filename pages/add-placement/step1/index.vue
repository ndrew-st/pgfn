<template>
  <div class="ap-step1__flex">
    <div>
      <p class="add-placement__h">
        Расположение и собственность
      </p>

      <!-- <p class="add-placement__p ap-step1__p1">
        Район, населенный пункт
        <span class="add-placement__red-star">*</span>
      </p>

      <input @input="askDadata()">

      <ApInput
        placeholder="Москва"
        :class="ap-step1__input1"
      /> -->

      <p class="add-placement__p ap-step1__p2">
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

      <p class="add-placement__p ap-step1__p3">
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

    <div>
      <OcDropDown class="ap-step1__button-filter">
        <OcButton
          slot="button"
          name="border"
          class="ap-step1__oc-btn"
        >
          {{ typeOfTenant1 === null ? 'Вы собственник или посредник?' : listTypeOfTenant[typeOfTenant1.id].name }}
          <span class="add-placement__red-star">*</span>
        </OcButton>

        <ApListDropdown
          slot="body"
          :list="listTypeOfTenant"
          @selectItem="selectTypeOfTenant1"
        />
      </OcDropDown>

      <OcDropDown
        v-if="typeOfTenant1 !== null"
        class="ap-step1__button-filter"
      >
        <OcButton
          slot="button"
          name="border"
          class="ap-step1__oc-btn"
        >
          {{ typeOfTenant2 === null ? 'Источник аренды/тип арендодателя' : typeOfTenant1.id === 0 ? listTypeOfTenant1[typeOfTenant2.id].name : listTypeOfTenant2[typeOfTenant2.id].name }}
          <span class="add-placement__red-star">*</span>
        </OcButton>

        <ApListDropdown
          slot="body"
          :list="typeOfTenant1 !== null && typeOfTenant1.id === 0 ? listTypeOfTenant1 : listTypeOfTenant2"
          @selectItem="selectTypeOfTenant2"
        />
      </OcDropDown>

      <OcButton
        v-if="typeOfTenant1 !== null && typeOfTenant2 !== null && inputAdress !== ''"
        name="most"
        color="red"
        class="ap-step1__button-next"
        @click.native="$emit('next')"
      >
        Продолжить
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus"/>
