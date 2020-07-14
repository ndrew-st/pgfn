<template>
  <div class="req-step2__flex">
    <div class="req-step2__left-col">
      <p class="add-placement__h">
        Необходимое жильё
      </p>

      <OcDropDown class="req-step2__dd">
        <ApButton
          slot="button"
          name="filter"
        >
          {{ selItem === null ? 'Выберите тип жилья' : list[selItem].name }}
          <span class="add-placement__red-star">*</span>
        </ApButton>

        <ApListDropdown
          slot="body"
          :list="list"
          @selectItem="selectItem"
        />
      </OcDropDown>

      <!-- <ApRadioList
        :list="housesList"
        :checked-value="checkedHouse"
        name="housetype"
        class="mt104"
      /> -->

      <ListApRadio
        v-if="selItem !== null"
        :list="list[selItem].list"
        class="req-step2__list-ap-radio"
        :sel-id="selId"
        @change="setSelId"
      />

      <p>{{ checkedHouse }}</p>
    </div>

    <div
      v-if="selItem !== ''"
      class="req-step2__right-block"
    >
      <p class="add-placement__p req-step2__p2">
        Площадь жилья
        <span class="add-placement__red-star">*</span>
      </p>

      <span class="mr8">От</span>

      <ApInput
        v-model="areaStart"
        class="req-step2__input1 mr34"
        type="number"
      />

      <span class="mr8">До</span>

      <ApInput
        v-model="areaEnd"
        class="req-step2__input1"
        type="number"
      />

      <span class="req-step2__span2">м²</span>

      <p class="add-placement__p req-step2__p1">
        Комнаты
        <span class="add-placement__red-star">*</span>
      </p>

      <span class="req-step2__span">Количество комнат</span>

      <select
        v-model="numberOfRooms"
        class="req-step2__sel"
      >
        <option
          v-for="n in 5"
          :key="n"
        >
          {{ n }}
        </option>
      </select>
    </div>

    <ApButton
      v-if="selItem !== null && areaStart > 0 && areaEnd > 0"
      name="red"
      @click.native="next"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
