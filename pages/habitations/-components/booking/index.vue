<template>
  <div class="hab-booking">
    <div class="hab-booking__container">
      <div class="hab-booking__top-line">
        <OcButton
          name="transparent"
          class="hab-booking__cross"
          icon="close"
          add-class="close"
          @click="$emit('changeBookingActive')"
        >
          закрыть
        </OcButton>

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
          <OcImg
            src="img/wheretostay/1.png"
            alt="house"
            class="money__img"
          />

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

        <OcButton
          name="most"
          color="red"
          class="hab-booking__footer__btn"
          @click="next()"
        >
          {{ stage === 1 ? 'Продолжить' : 'Забронировать' }}
        </OcButton>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus" scoped/>
