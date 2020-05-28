<template>
  <div
    class="hab-booking"
  >
    <div
      class="hab-booking__container"
    >
      <div class="hab-booking__top-line">
        <svg
          class="hab-booking__cross"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="$emit('changeBookingActive')"
        >
          <path
            d="M1 1C10.1875 10.0968 10.375 10.2903 13 13"
            stroke="#989BA8"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1 13C10.0968 3.8125 10.2903 3.625 13 1"
            stroke="#989BA8"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <p class="hab-booking__h">
          Оформление заказа
        </p>
      </div>

      <div class="hab-booking__content">
        <div class="hab-booking__tabs">
          <div
            class="hab-booking__btn"
            :class="{'hab-booking__btn__active': currentActive === 'rules'}"
            @click="currentActive = 'rules'"
          >
            Стоимость и правила дома
          </div>

          <div
            class="hab-booking__btn"
            :class="{'hab-booking__btn__active': currentActive === 'payment'}"
            @click="payment()"
          >
            Оформление и оплата
          </div>
        </div>

        <div class="money__flex">
          <img
            src="img/wheretostay/1.png"
            alt="house"
            class="money__img"
          >

          <div class="money__right">
            <h2 class="money__app-name">
              Tree House
            </h2>

            <div class="money__flex-rate">
              <div class="money__rate">
                4.5
              </div>

              <p class="money__hotel">
                182 отзыва    Отель
              </p>
            </div>

            <p class="money__adress">
              г. Судак, ул. Генерала Маргелова, д.15
            </p>

            <p class="money__comfort">
              4 гостя  ·  1 спальня  ·  2 кровати  ·  1 ванная
            </p>
          </div>
        </div>

        <component
          :is="currentActive"
        />

        <Total />
      </div>

      <div class="hab-booking__footer">
        <p class="hab-booking__p-booking">
          Бронирование <span class="hab-booking__bold">бесплатно</span>. Оплатите полную стоимость хозяину жилья при заселении — в личном кабинете.
        </p>

        <button
          class="hab-booking__footer__btn"
          @click="next()"
        >
          {{ stage === 1 ? 'Продолжить' : 'Забронировать' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped/>

<script src="./index.js" />
