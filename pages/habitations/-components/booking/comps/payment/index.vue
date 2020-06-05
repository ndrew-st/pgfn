<template>
  <div class="hab-payment">
    <div class="hab-payment__name">
      <input
        type="text"
        placeholder="Ваше имя"
        class="hab-payment__name__input-name"
      >
    </div>

    <p class="hab-payment__p">
      Написать хозяину
    </p>

    <input
      type="text"
      :placeholder="'Здраствуйте, ' + name + ', я хочу провести 25 дней в вашем доме'"
      class="hab-payment__input2"
    >

    <p class="hab-payment__p">
      Быстрая регистрация
    </p>

    <p class="hab-payment__p2">
      Это нужно для того, чтобы хозяева и представители Personal.Guide могли с вами связаться.
    </p>

    <OcPhoneNumber />

    <div class="hab-payment__flex">
      <div
        class="hab-payment__checkbox"
        :class="{'hab-payment__checkbox__black': checked}"
        @click="checked = !checked"
      >
        <svg
          v-if="checked"
          class="hab-payment__checkbox__v"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.5L4.5 10.5L12 1"
            stroke="white"
            stroke-width="1.4"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <p
        class="lic"
      >
        Я принимаю условия
        <a
          href="#"
        >
          Пользовательского соглашения
        </a>
        и даю своё согласие на обработку моей персональной информации
      </p>
    </div>

    <p class="hab-payment__p3">
      17 июня – 27 июня, 10 ночей, 1 гость
    </p>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
