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
            v-model="typeOfReservation"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="0"
            @change="changeRadio(typeOfReservation, 'typeOfReservation')"
          >

          <label
            class="ap-step2__label"
            for="fid-1"
          >Без предоплаты</label>
        </div>

        <div class="ap-step4__radio-item">
          <input
            id="fid-2"
            v-model="typeOfReservation"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="1"
            @change="changeRadio(typeOfReservation, 'typeOfReservation')"
          >

          <label
            class="ap-step2__label"
            for="fid-2"
          >Оплата первого месяца/суток</label>
        </div>

        <div class="ap-step4__radio-item">
          <input
            id="fid-3"
            v-model="typeOfReservation"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="2"
            @change="changeRadio(typeOfReservation, 'typeOfReservation')"
          >

          <label
            class="ap-step2__label"
            for="fid-3"
          >Оплата 50%</label>
        </div>
      </div>

      <p class="add-placement__h2 ap-step4__type-booking">
        Условия отмены бронирования
        <span class="add-placement__red-star">*</span>
      </p>

      <div class="ap-step4__radio-block">
        <div class="ap-step4__radio-item">
          <input
            id="fid-4"
            v-model="cancellationPolicy"
            type="radio"
            name="radio2"
            class="ap-step2__radio"
            value="0"
            @change="changeRadio(cancellationPolicy, 'cancellationPolicy')"
          >

          <label
            class="ap-step2__label"
            for="fid-4"
          >Бесплатная отмена за любое время</label>
        </div>

        <div class="ap-step4__radio-item">
          <input
            id="fid-5"
            v-model="cancellationPolicy"
            type="radio"
            name="radio2"
            class="ap-step2__radio"
            value="1"
            @change="changeRadio(cancellationPolicy, 'cancellationPolicy')"
          >

          <label
            class="ap-step2__label"
            for="fid-5"
          >Бесплатная отмена за 2 дня до даты въезда</label>
        </div>
      </div>

      <TimeSelectBlock
        title="Время для звонков"
        @changeTime="changeTimeForCalls"
      />
    </div>

    <div class="ap-step4__right-col">
      <TimeSelectBlock
        title="Время заезда гостей/показа жилья"
        @changeTime="changePickUpTime"
      />

      <TimeSelectBlock
        title="Время выезда гостей"
        @changeTime="changeDepartureTime"
      />

      <!-- <button
        @click="$emit('back')"
      >
        Назад
      </button> -->
    </div>

    <ApButton
      name="red"
      @click.native="next()"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
