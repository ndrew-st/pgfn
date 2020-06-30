<template>
  <div class="ap-step2__flex">
    <div class="ap-step2__left-col">
      <p class="add-placement__h">
        Тип жилья
      </p>

      <OcDropDown class="ap-step2__dd">
        <ApButton
          slot="button"
          name="filter"
        >
          {{ selItem === null ? 'Выберите тип жилья' : list[selItem].name }}
          <span class="add-placement__red-star">*</span>
        </ApButton>

        <ApListDropdown
          slot="body"
          :list="list"
          @selectItem="selectItem"
        />
      </OcDropDown>

      <div class="ap-step2__radio-block">
        <div class="ap-step2__radio-item">
          <input
            id="fid-1"
            v-model="picked"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="Целиком"
          >

          <label
            class="ap-step2__label"
            for="fid-1"
          >Квартира целиком</label>
        </div>

        <div class="ap-step2__radio-item">
          <input
            id="fid-2"
            v-model="picked"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="Номер"
          >

          <label
            class="ap-step2__label"
            for="fid-2"
          >Номер в отеле</label>
        </div>
      </div>
    </div>

    <!-- <OcInput
        v-model="current"
        type="radio"
        icon="circle-radio"
        icon-position="left"
        name="tariff"
        kind="circle-radio"
        check-value="Целиком"
        label="Квартира целиком"
      />

      <OcInput
        v-model="current"
        type="radio"
        icon="circle-radio"
        icon-position="left"
        name="tariff"
        kind="circle-radio"
        check-value="Номер"
        label="Номер в отеле"
      /> -->

    <div
      v-if="selItem !== ''"
      class="ap-step2__right-block"
    >
      <p class="add-placement__p ap-step2__p1">
        Комнаты
        <span class="add-placement__red-star">*</span>
      </p>

      <span class="ap-step2__span">Количество комнат</span>

      <select
        v-model="numberOfRooms"
        class="ap-step2__sel"
      >
        <option
          v-for="n in 5"
          :key="n"
        >
          {{ n }}
        </option>
      </select>

      <p class="add-placement__p ap-step2__p2">
        Площадь жилья
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput
        class="ap-step2__input1"
        type="number"
      />

      <span class="ap-step2__span2">м²</span>
    </div>

    <ApButton
      v-if="selItem !== ''"
      name="red"
      @click.native="next"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
