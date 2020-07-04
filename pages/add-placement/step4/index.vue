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
            v-model="timeForCalls"
            type="radio"
            name="radio3"
            class="ap-step2__radio"
            value="0"
          >

          <label
            class="ap-step2__label"
            for="fid-6"
          >Любое время и дни недели</label>
        </div>

        <div class="ap-step4__radio-item">
          <div class="ap-step4__flex-time">
            <input
              id="fid-7"
              v-model="timeForCalls"
              type="radio"
              name="radio3"
              class="ap-step2__radio"
              value="1"
            >

            <label
              class="ap-step2__label"
              for="fid-7"
            >Любые дни с</label>

            <ApTimeSelect
              :sel-time="timeForCallsStart"
              class="ap-step4__time-block"
              @change="timeForCallsStart = $event"
            />

            <span>по</span>

            <ApTimeSelect
              :sel-time="timeForCallsFinish"
              class="ap-step4__time-block"
              @change="timeForCallsFinish = $event"
            />
          </div>
        </div>

        <div class="ap-step4__radio-item">
          <OcDropDown class="ap-step4__drop-time">
            <template v-slot:button>
              <input
                id="fid-8"
                v-model="timeForCalls"
                type="radio"
                name="radio3"
                class="ap-step2__radio ap-step4__sel-days"
                value="2"
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
        :checked="pickUpTime === 0"
        :value="0"
        label="Любое время и дни недели"
        class="ap-step4__radio-item ap-step4__radio"
        @change="pickUpTime = $event"
      />

      <div class="ap-step4__flex-time">
        <ApRadio
          id="aas3"
          :checked="pickUpTime === 1"
          :value="1"
          label="Любые дни недели с"
          class="ap-step4__radio"
          @change="pickUpTime = $event"
        />

        <ApTimeSelect
          :sel-time="pickUpTimeStart"
          class="ap-step4__time-block"
          @change="pickUpTimeStart = $event"
        />

        <span>по</span>

        <ApTimeSelect
          :sel-time="pickUpTimeFinish"
          class="ap-step4__time-block"
          @change="pickUpTimeFinish = $event"
        />
      </div>

      <OcDropDown class="ap-step4__drop-time">
        <template v-slot:button>
          <ApRadio
            id="aas4"
            :checked="pickUpTime === 2"
            :value="2"
            label="Выбранные дни"
            class="ap-step4__radio"
            @change="pickUpTime = $event"
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
        :checked="departureTime === 0"
        :value="0"
        label="Любое время и дни недели"
        class="ap-step4__radio-item ap-step4__radio"
        @change="departureTime = $event"
      />

      <div class="ap-step4__flex-time">
        <ApRadio
          id="hrty4"
          :checked="departureTime === 1"
          :value="1"
          label="Любые дни недели с"
          class="ap-step4__radio"
          @change="departureTime = $event"
        />

        <ApTimeSelect
          :sel-time="departureTimeStart"
          class="ap-step4__time-block"
          @change="departureTimeStart = $event"
        />

        <span>по</span>

        <ApTimeSelect
          :sel-time="departureTimeFinish"
          class="ap-step4__time-block"
          @change="departureTimeFinish = $event"
        />
      </div>

      <OcDropDown class="ap-step4__drop-time">
        <template v-slot:button>
          <ApRadio
            id="hgjyh5"
            :checked="departureTime === 2"
            :value="2"
            label="Выбранные дни"
            class="ap-step4__radio"
            @change="departureTime = $event"
          />
        </template>

        <template v-slot:body>
          <WeekTime
            class="ap-step4__drop-time-list"
            :type="'departureTime'"
          />
        </template>
      </OcDropDown>
    </div>

    <ApButton
      v-if="selItem !== ''"
      name="red"
      @click.native="next()"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
