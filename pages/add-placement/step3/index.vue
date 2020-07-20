<template>
  <div class="ap-step3__flex">
    <div class="ap-step3__left-col">
      <p class="add-placement__h">
        Условия и стоимость аренды
        <span class="add-placement__red-star">*</span>
      </p>

      <div class="ap-step3__arrow-h">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99902 0.999878L4.99902 4.99988L0.999022 0.999878"
            stroke="#272528"
          />
        </svg>

        <span class="add-placement__h2 ap-step3__h2-1">
          Посуточно
        </span>
      </div>

      <ApRow
        v-for="(item, days) in items"
        :key="days"
        :item="item"
        type="byTheDay"
        @changeCheck="changeCheck"
      />

      <p class="add-placement__h2 ap-step3__h2-2">
        Размер первой оплаты:
      </p>

      <div class="ap-step2__radio-block">
        <div class="ap-step2__radio-item">
          <input
            id="fid-1"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="0"
            :checked="byTheDay === '0'"
            @change="changeFirstPayment($event.target.value, 'byTheDay')"
          >

          <label
            class="ap-step2__label"
            for="fid-1"
          >Посуточно</label>
        </div>

        <div class="ap-step2__radio-item">
          <input
            id="fid-2"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="1"
            :checked="byTheDay === '1'"
            @change="changeFirstPayment($event.target.value, 'byTheDay')"
          >

          <label
            class="ap-step2__label"
            for="fid-2"
          >Весь срок</label>
        </div>
      </div>
    </div>

    <div class="ap-step3__right-col">
      <div class="ap-step3__arrow-h-2">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99902 0.999878L4.99902 4.99988L0.999022 0.999878"
            stroke="#272528"
          />
        </svg>

        <span class="add-placement__h2 ap-step3__h2-3">
          Долгосрочно
        </span>
      </div>

      <ApRow
        v-for="(item, index) in items2"
        :key="index"
        :item="item"
        type="longTerm"
        @changeCheck="changeCheck"
      />

      <p class="add-placement__h2 ap-step3__h2-2">
        Размер первой оплаты:
      </p>

      <div class="ap-step2__radio-block">
        <div class="ap-step2__radio-item">
          <input
            id="fid-3"
            type="radio"
            name="radio2"
            class="ap-step2__radio"
            value="0"
            :checked="longTerm === '0'"
            @change="changeFirstPayment($event.target.value, 'longTerm')"
          >

          <label
            class="ap-step2__label"
            for="fid-3"
          >Первый месяц</label>
        </div>

        <div class="ap-step2__radio-item">
          <input
            id="fid-4"
            type="radio"
            name="radio2"
            class="ap-step2__radio"
            value="1"
            :checked="longTerm === '1'"
            @change="changeFirstPayment($event.target.value, 'longTerm')"
          >

          <label
            class="ap-step2__label"
            for="fid-4"
          >Весь срок</label>
        </div>
      </div>
    </div>

    <ApButton
      v-if="isFilled"
      name="red"
      @click.native="next()"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
