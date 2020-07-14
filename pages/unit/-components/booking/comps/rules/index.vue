<template>
  <div class="hab-rules">
    <h2 class="hab-rules__p">
      Правила дома
    </h2>

    <ul class="hab-rules__ul">
      <li
        v-for="(rule, index) in rules"
        :key="index"
        class="hab-rules__li"
      >
        <span
          class="hab-rules__span"
          :class="{'hab-rules__span__first': index === 0}"
        >·</span>
        {{ rule }}
      </li>
    </ul>

    <p class="hab-rules__p">
      Ограничения
    </p>

    <div class="hab-rules__flex">
      <p class="hab-rules__p3">
        <span
          class="hab-rules__span hab-rules__span__first"
        >·</span>
        Нельзя с животными
      </p>

      <p class="hab-rules__p3">
        <span
          class="hab-rules__span"
        >·</span>
        Нельзя с детьми
      </p>

      <p class="hab-rules__p3">
        <span
          class="hab-rules__span"
        >·</span>
        Нельзя курить
      </p>
    </div>

    <p class="hab-rules__p4">
      Бронируя жильё, вы соглашаетесь с правилами и ограничениями, установленными арендодателем.
    </p>

    <div class="money__section2">
      <div class="money__section2__flex">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="money__man-head"
        >
          <mask
            id="path-1-inside-1"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8ZM5 8.33333C2.23858 8.33333 0 10.5719 0 13.3333H14C14 10.5719 11.7614 8.33333 9 8.33333H5Z"
            />
          </mask>
          <path
            d="M0 13.3333H-1V14.3333H0V13.3333ZM14 13.3333V14.3333H15V13.3333H14ZM10 4C10 5.65685 8.65685 7 7 7V9C9.76142 9 12 6.76142 12 4H10ZM7 1C8.65685 1 10 2.34315 10 4H12C12 1.23858 9.76142 -1 7 -1V1ZM4 4C4 2.34315 5.34315 1 7 1V-1C4.23858 -1 2 1.23858 2 4H4ZM7 7C5.34315 7 4 5.65685 4 4H2C2 6.76142 4.23858 9 7 9V7ZM1 13.3333C1 11.1242 2.79086 9.33333 5 9.33333V7.33333C1.68629 7.33333 -1 10.0196 -1 13.3333H1ZM14 12.3333H0V14.3333H14V12.3333ZM9 9.33333C11.2091 9.33333 13 11.1242 13 13.3333H15C15 10.0196 12.3137 7.33333 9 7.33333V9.33333ZM5 9.33333H9V7.33333H5V9.33333Z"
            fill="#272528"
            mask="url(#path-1-inside-1)"
          />
        </svg>

        <p class="money__guest">
          1 Гость
        </p>
      </div>

      <div class="money__section2__flex">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="money__calendar"
        >
          <rect
            x="0.5"
            y="0.5"
            width="11"
            height="11"
            rx="1.5"
            stroke="black"
          />
          <rect
            x="1"
            y="3"
            width="10"
            height="1"
            fill="#272528"
          />
        </svg>

        <p class="money__guest">
          17 июня 2020 г. – 27 июня 2020 г.
        </p>
      </div>

      <div class="money__sector3">
        <div class="money__sector3__flex">
          <p class="money__goods">
            2 045 ₽ х 25 ночей
          </p>

          <p class="money__goods">
            51 125 ₽
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped/>

<script src="./index.js"/>
