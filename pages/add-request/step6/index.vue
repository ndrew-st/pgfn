<template>
  <div class="req-step6">
    <p class="add-placement__h">
      Условия аренды
    </p>

    <p class="req-step6__h2 mt62">
      Прибытие, выезд
      <span class="add-placement__red-star">*</span>
    </p>

    <!-- <ApInput
      v-model="datesOfStay"
      placeholder="17.04.2020 – 23.04.2020"
      class="req-step6__input-date"
      @input="mask"
    /> -->

    <OcDropDown>
      <OcInput
        slot="button"
        v-model="datesOfStay"
        placeholder="дд.мм.гггг – дд.мм.гггг"
        kind="most"
        readonly
        class="req-step6__input-date"
      />
      <Calendar
        slot="body"
        :key="curDate"
        :cur-sel-date="curSelStart"
        class="req-step6__date-content"
        @input="changeSelDate"
      />
    </OcDropDown>

    <p class="req-step6__h2 mt62">
      Количество гостей
      <span class="add-placement__red-star">*</span>
    </p>

    <!-- <ApInput
      placeholder="Гости"
      class="req-step6__input-guests"
    /> -->

    <div class="req-step6__guests-container">
      <OcDropDown>
        <OcInput
          slot="button"
          :value="getstsInputText"
          placeholder="Гости"
          kind="most"
          readonly
        />

        <Guests
          slot="body"
          :guests="guests"
          class="req-step6__guests-content"
          @input="handlerGuests"
        />
      </OcDropDown>
    </div>

    <p class="req-step6__h2 mt48">
      Укажите справедливую цену
      <span class="add-placement__red-star">*</span>
    </p>

    <p class="req-step6__p-price">
      Укажите цену, которую считаете хорошей за указанные удобства и период проживания в описанном вами жилье
    </p>

    <ApInput
      placeholder="10000"
      :value="price"
      class="req-step6__input-price"
      @input="changePrice"
    />

    <span class="req-step6__span-price">₽/сутки</span>

    <p class="req-step6__h2 mt36">
      Гражданство проживающих
      <span class="add-placement__red-star">*</span>
    </p>

    <ApInput
      placeholder="Россия"
      class="req-step6__input-citizenship"
      @input="changeCitizenship"
    />

    <CheckboxesList
      title-block="Необходимые разрешения"
      :list="listLimits"
      store="request"
      :red-star="false"
      class="mt48"
    />

    <ApFolding
      caption="Больше условий"
      class="req-step3__folding-block"
    >
      <CheckboxesList
        title-block="Собственник/арендодатель"
        :list="listTypeOfHousing"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
        @change="changeCheckbox"
      />

      <CheckboxesList
        title-block="Посредник"
        :list="listTypeOfTenant"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
        @change="changeCheckbox"
      />

      <CheckboxesList
        title-block="Условия бронирования"
        :list="listBookingConditions"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Условия отмены бронирования"
        :list="listCancelBookingConditions"
        store="request"
        :red-star="false"
        class="add-placement__mt48"
      />

      <p class="add-placement__h2">
        Время для звонков
      </p>

      <TimeOptions @changeTime="changeTimeForCalls" />

      <p class="add-placement__h2">
        Время для въезда/показа жилья
      </p>

      <TimeOptions @changeTime="changePickUpTime" />

      <p class="add-placement__h2">
        Время для выезда
      </p>

      <TimeOptions @changeTime="changeDepartureTime" />
    </ApFolding>

    <ApButton
      v-if="price !== '' && datesOfStay !== '' && getstsInputText !== '' && citizenship !== ''"
      name="red"
      @click.native="addPlacement"
    >
      Опубликовать заявку
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
