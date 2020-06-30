<template>
  <div class="ap-step1__flex">
    <div>
      <p class="add-placement__h">
        Расположение и собственность
      </p>

      <p class="add-placement__p ap-step1__p1">
        Район, населенный пункт
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput
        placeholder="Москва"
        :class="ap-step1__input1"
      />

      <p class="add-placement__p ap-step1__p2">
        Точный адрес
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput :class="ap-step1__input2" />

      <p class="add-placement__p ap-step1__p3">
        Указать на карте
      </p>

      <yandex-map
        :coords="coords"
        class="ap-step1__yandex-map-content"
        @map-was-initialized="initMap"
      >
        <ymap-marker
          marker-id="1"
          :coords="coords"
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
          {{ typeOfTenant === null ? 'Вы собственник или посредник?' : listTypeOfTenant[typeOfTenant.id].name }}
          <span class="add-placement__red-star">*</span>
        </OcButton>

        <ApListDropdown
          slot="body"
          :list="listTypeOfTenant"
          @selectItem="selectTypeOfTenant"
        />
      </OcDropDown>

      <OcDropDown
        v-if="typeOfTenant !== null"
        class="ap-step1__button-filter"
      >
        <OcButton
          slot="button"
          name="border"
          class="ap-step1__oc-btn"
        >
          {{ typeOfHousing === null ? 'Источник аренды/тип арендодателя' : listTypeOfHousing[typeOfHousing.id].name }}
          <span class="add-placement__red-star">*</span>
        </OcButton>

        <ApListDropdown
          slot="body"
          :list="listTypeOfHousing"
          @selectItem="selectTypeOfHousing"
        />
      </OcDropDown>

      <OcButton
        v-if="selItem2 !== ''"
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
