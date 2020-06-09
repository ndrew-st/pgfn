<template>
  <div>
    <div class="ap-step1__flex">
      <div>
        <p class="add-placement__h">
          Расположение и собственность
        </p>

        <p class="ap-step1__p1">
          Район, населенный пункт *
        </p>

        <ApInput
          placeholder="Москва"
          :class="ap-step1__input1"
        />

        <p class="ap-step1__p2">
          Точный адрес *
        </p>

        <ApInput :class="ap-step1__input2" />

        <p class="ap-step1__p3">
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
          <ApButton
            slot="button"
            name="filter"
          >
            {{ selItem ==='' ? 'Вы собственник или посредник?' : selItem }}
            <span class="add-placement__red-star">*</span>
          </ApButton>

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
          <ApButton
            slot="button"
            name="filter"
          >
            {{ selItem2 ==='' ? 'Источник аренды/тип арендодателя' : selItem2 }}
            <span class="add-placement__red-star">*</span>
          </ApButton>

          <ApListDropdown
            slot="body"
            :list="list2"
            @selectItem="selectItem2"
          />
        </OcDropDown>

        <ApButton
          v-if="selItem2 !== ''"
          name="red"
          @click.native="$emit('next')"
        >
          Продолжить
        </ApButton>
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
