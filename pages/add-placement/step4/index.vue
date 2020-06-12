<template>
  <div class="ap-step4__flex">
    <div class="ap-step4__left-col">
      <p class="add-placement__h">
        Условия и стоимость аренды
      </p>

      <p class="add-placement__h2 ap-step4__type-booking">
        Тип бронирования
        <span class="add-placement__red-star">*</span>
      </p>

      <div class="ap-step4__radio-block">
        <div class="ap-step4__radio-item">
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
          >Без предоплаты</label>
        </div>

        <div class="ap-step4__radio-item">
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
          >Оплата первого месяца/суток</label>
        </div>

        <div class="ap-step4__radio-item">
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
          >Оплата 50%</label>
        </div>
      </div>

      <p class="add-placement__h2 ap-step4__type-booking">
        Тип бронирования
        <span class="add-placement__red-star">*</span>
      </p>

      <div class="ap-step4__radio-block">
        <div class="ap-step4__radio-item">
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
          >Без предоплаты</label>
        </div>

        <div class="ap-step4__radio-item">
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
          >Оплата первого месяца/суток</label>
        </div>
      </div>
    </div>

    <ApButton
      v-if="selItem !== ''"
      name="red"
      @click.native="$emit('next')"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
