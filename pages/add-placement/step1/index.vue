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
          name="filter"
        >
          {{ selItem === '' ? 'Вы собственник или посредник?' : selItem }}
          <span class="add-placement__red-star">*</span>
        </OcButton>

        <ApListDropdown
          slot="body"
          :list="list"
          @selectItem="selectItem"
        />
      </OcDropDown>

      <OcDropDown
        v-if="selItem !== ''"
        class="ap-step1__button-filter"
      >
        <OcButton
          slot="button"
          name="filter"
        >
          {{ selItem2 ==='' ? 'Источник аренды/тип арендодателя' : selItem2 }}
          <span class="add-placement__red-star">*</span>
        </OcButton>

        <ApListDropdown
          slot="body"
          :list="list2"
          @selectItem="selectItem2"
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

<<<<<<< HEAD
<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
=======
<script src="./index.js" />
<style src="./index.styl" lang="stylus"/>
>>>>>>> origin/feature/pgs-55
