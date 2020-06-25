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
            value="Оплата первого месяца"
          >

          <label
            class="ap-step2__label"
            for="fid-2"
          >Оплата первого месяца/суток</label>
        </div>

        <div class="ap-step4__radio-item">
          <input
            id="fid-3"
            v-model="picked"
            type="radio"
            name="radio"
            class="ap-step2__radio"
            value="Номер"
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
            v-model="picked2"
            type="radio"
            name="radio2"
            class="ap-step2__radio"
            value="любое время"
          >

          <label
            class="ap-step2__label"
            for="fid-4"
          >Бесплатная отмена за любое время</label>
        </div>

        <div class="ap-step4__radio-item">
          <input
            id="fid-5"
            v-model="picked2"
            type="radio"
            name="radio2"
            class="ap-step2__radio"
            value="за 2 дня"
          >

          <label
            class="ap-step2__label"
            for="fid-5"
          >Бесплатная отмена за 2 дня до даты въезда</label>
        </div>
      </div>

      <p class="add-placement__h2 ap-step4__type-booking">
        Время для звонков
        <span class="add-placement__red-star">*</span>
      </p>

      <div class="ap-step4__radio-block">
        <div class="ap-step4__radio-item">
          <input
            id="fid-6"
            v-model="picked3"
            type="radio"
            name="radio3"
            class="ap-step2__radio"
            value="любое время"
          >

          <label
            class="ap-step2__label"
            for="fid-6"
          >Любое время и дни недели</label>
        </div>

        <div class="ap-step4__radio-item">
          <input
            id="fid-7"
            v-model="picked3"
            type="radio"
            name="radio3"
            class="ap-step2__radio"
            value="Любые дни с"
          >

          <label
            class="ap-step2__label"
            for="fid-7"
          >Любые дни с</label>
        </div>

        <div class="ap-step4__radio-item">
          <OcDropDown class="ap-step4__drop-time">
            <template v-slot:button>
              <input
                id="fid-8"
                v-model="picked3"
                type="radio"
                name="radio3"
                class="ap-step2__radio ap-step4__sel-days"
                value="Выбранные дни"
              >

              <label
                for="fid-8"
                class="ap-step2__label"
              >Выбранные дни</label>
            </template>

            <template v-slot:body>
              <WeekTime
                class="ap-step4__drop-time-list"
              />
            </template>
          </OcDropDown>
        </div>
      </div>
    </div>

    <div class="ap-step4__right-col">
      <p class="add-placement__h2 ap-step4__type-booking">
        Время заезда гостей/показа жилья
        <span class="add-placement__red-star">*</span>
      </p>

      <ApRadio
        id="fid-9"
        v-model="picked4"
        name="radio4"
        value="Любое время"
        label="Любое время и дни недели"
        class="ap-step4__radio-item ap-step4__radio"
      />

      <ApRadio
        id="aas3"
        v-model="picked4"
        name="radio4"
        value="Любые дни недели"
        label="Любые дни недели с"
        class="ap-step4__radio"
      />

      <OcDropDown class="ap-step4__drop-time">
        <template v-slot:button>
          <ApRadio
            id="aas4"
            v-model="picked4"
            name="radio4"
            value="Выбранные дни"
            label="Выбранные дни"
            class="ap-step4__radio"
          />
        </template>

        <template v-slot:body>
          <WeekTime
            class="ap-step4__drop-time-list"
          />
        </template>
      </OcDropDown>

      <p class="add-placement__h2 ap-step4__type-booking">
        Время выезда гостей
        <span class="add-placement__red-star">*</span>
      </p>

      <ApRadio
        id="wer34"
        v-model="picked5"
        name="radio5"
        value="Любое время"
        label="Любое время и дни недели"
        class="ap-step4__radio-item ap-step4__radio"
      />

      <div class="ap-step4__flex-time">
        <ApRadio
          id="hrty4"
          v-model="picked5"
          name="radio5"
          value="Любые дни недели"
          label="Любые дни недели с"
          class="ap-step4__radio"
        />

        <ApTimeSelect class="ap-step4__time-block" />

        <span>по</span>

        <ApTimeSelect class="ap-step4__time-block" />
      </div>

      <ApRadio
        id="hgjyh5"
        v-model="picked5"
        name="radio5"
        value="Выбранные дни"
        label="Выбранные дни"
        class="ap-step4__radio"
      />
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
