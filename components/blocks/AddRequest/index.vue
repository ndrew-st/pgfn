<template>
  <div class="add-request__container">
    <p class="add-request__p">
      Заявка на аренду жилья
    </p>

    <hr>

    <p class="add-request__p">
      Адрес
      <span class="add-request__red-star">*</span>
    </p>

    <ApInput
      :value="inputAdress"
      class="add-request__adress"
      @input="askDadata($event)"
    />

    <ApDadataDropdown
      v-if="adressList"
      :list="adressList"
      @selectAdress="selectAdress"
    />

    <div class="flex">
      <p
        v-if="unknownHouse !== null"
        class="add-request__unknoun-house"
      >
        Мы не уверены, что такой дом существует. Проверьте, нет ли ошибки
      </p>
    </div>

    <div class="flex">
      <div class="add-request__column">
        <p class="add-request__p">
          Тип жилья
          <span class="add-request__red-star">*</span>
        </p>

        <OcDropDown class="add-request__dd-btn">
          <ApButton
            slot="button"
            name="filter"
          >
            {{ selItem === null ? 'Выберите тип жилья' : list[selItem].name }}
            <span class="add-request__red-star">*</span>
          </ApButton>

          <ApListDropdown
            slot="body"
            :list="list"
            @selectItem="selectItem"
          />
        </OcDropDown>
      </div>

      <div class="add-request__column">
        <p class="add-request__p">
          Спальные места
          <span class="add-request__red-star">*</span>
        </p>

        <!-- <select
          v-model="sleepingPlaces"
          class="add-request__sel"
          @change="$emit('change', $event.target.value)"
        >
          <option
            v-for="(item, index) in sleepingPlacesArray"
            :key="index"
          >
            {{ item }}
          </option>
        </select> -->

        <OcDropDown class="add-request__dd-btn">
          <ApButton
            slot="button"
            name="filter"
          >
            {{ sleepingPlaces === '' ? 'Выберите спальные места' : sleepingPlaces }}
            <span class="add-request__red-star">*</span>
          </ApButton>

          <ApListDropdown
            slot="body"
            :list="sleepingPlacesArray"
            @selectItem="selectSleepingPlaces"
          />
        </OcDropDown>
      </div>
    </div>

    <div class="flex">
      <div class="add-request__column">
        <p class="add-request__p">
          Заезд / Выезд
          <span class="add-request__red-star">*</span>
        </p>

        <OcDropDown>
          <OcInput
            slot="button"
            v-model="datesOfStay"
            placeholder="дд.мм.гггг – дд.мм.гггг"
            kind="most"
            readonly
            class="add-request__input-date"
          />

          <Calendar
            slot="body"
            :key="curDate"
            :cur-sel-date="curSelStart"
            class="add-request__date-content"
            @input="changeSelDate"
          />
        </OcDropDown>
      </div>

      <div class="add-request__column">
        <p class="add-request__p">
          Цена
          <span class="add-request__red-star">*</span>
        </p>

        <ApInput
          v-model="price"
          class="add-request__input-price"
          type="number"
        />

        <span class="add-request__span2">9<span> / сут</span></span>
      </div>
    </div>

    <p class="add-request__p">
      Примечания
      <span class="add-request__red-star">*</span>
    </p>

    <textarea
      v-model="description"
      placeholder="Дополнительные пожелания"
      class="add-request__big-desc"
    />

    <div class="flex">
      <OcButton
        name="most"
        color="red"
        class="add-request__btn-next"
      >
        Продолжить
      </OcButton>

      <OcButton
        name="most"
        color="blue"
        class="add-request__btn-next"
      >
        Отменить
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>

<style lang="stylus" src="./index.styl"/>
