<template>
  <div class="booking-footer">
    <div class="booking-footer__container">
      <div class="booking-footer__block-menu">
        <nuxt-link
          to="#"
          class="booking-footer__link"
        >
          Фотогалерея
        </nuxt-link>

        <nuxt-link
          to="#"
          class="booking-footer__link"
        >
          Удобства
        </nuxt-link>

        <nuxt-link
          to="#"
          class="booking-footer__link"
        >
          Отзывы
        </nuxt-link>

        <nuxt-link
          to="#"
          class="booking-footer__link"
        >
          Расположение
        </nuxt-link>
      </div>

      <div class="booking-footer__block-buttons">
        <div class="booking-footer__buttons">
          {{ bookingFooterInfo.manCount }}
        </div>

        <div class="booking-footer__buttons">
          {{ bookingFooterInfo.period }}
        </div>
      </div>

      <div class="booking-footer__booking-block">
        <div class="booking-footer__hab-price-block">
          <p class="booking-footer__habitation">
            {{ bookingFooterInfo.habitation }}
          </p>

          <p class="booking-footer__price">
            {{ bookingFooterInfo.price }}
          </p>
        </div>

        <OcButton
          name="most"
          class="booking-footer__btn-booking"
          color="red"
          @click="$emit('changeBookingActive')"
        >
          Забронировать
        </OcButton>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus" scoped/>
