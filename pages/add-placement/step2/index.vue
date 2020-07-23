<template>
  <div class="ap-step2__flex">
    <div class="ap-step2__left-col">
      <p class="add-placement__h">
        Тип жилья
      </p>

      <OcDropDown class="ap-step2__dd">
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

      <ListApRadio
        v-if="selItem !== null"
        :list="list[selItem].list"
        class="ap-step2__list-ap-radio"
        :sel-id="selId"
        @change="selId = $event"
      />

      <template v-if="selItem !== null && selItem !== 4">
        <p class="add-placement__p ap-step2__p2">
          {{ selItem === 1 ? 'Количество этажей в доме' : 'Этаж' }}
        </p>

        <span
          v-if="selItem !== null && selItem !== 4"
          class="ap-step2__span"
        >Жилье расположено на</span>

        <ApInput
          v-if="selItem !== null && selItem !== 4"
          v-model="floor"
          class="ap-step2__input-floors"
          type="number"
          @input="saveValue($event, 'floor')"
        />

        <span
          v-if="selItem !== null && selItem !== 4"
          class="ap-step2__span-floor"
        >этаже</span>

        <span
          v-if="selItem !== null && selItem !== 4"
          class="ap-step2__span ml46"
        >из</span>

        <ApInput
          v-if="selItem !== null"
          v-model="floors"
          class="ap-step2__input-floors"
          type="number"
          @input="saveValue($event, 'floors')"
        />

        <span class="ap-step2__span-floor">этажей</span>
      </template>
    </div>

    <!-- <p>selItem: {{ selItem }}</p>
    <p>selId: {{ selId }}</p> -->

    <div
      class="ap-step2__right-block"
    >
      <p class="add-placement__p ap-step2__p1">
        Комнаты
        <span class="add-placement__red-star">*</span>
      </p>

      <span class="ap-step2__span">Количество комнат</span>

      <select
        v-model="numberOfRooms"
        class="ap-step2__sel"
        @input="saveValueItem($event.target.value, 'numberOfRooms')"
      >
        <option
          v-for="n in 5"
          :key="n"
          :value="n"
        >
          {{ n }}
        </option>
      </select>

      <p class="add-placement__p ap-step2__p2">
        Площадь жилья
        <span class="add-placement__red-star">*</span>
      </p>

      <ApInput
        v-model="area"
        class="ap-step2__input1"
        type="number"
        @input="saveValue($event, 'area')"
      />

      <span class="ap-step2__span2">м²</span>

      <p class="add-placement__p ap-step2__p2">
        Площадь участка при доме (заполняется при наличии)
      </p>

      <ApInput
        v-model="yardArea"
        class="ap-step2__input1"
        type="number"
        @input="saveValue($event, 'yardArea')"
      />

      <span class="ap-step2__span2">м²</span>
    </div>

    <ApButton
      v-if="selItem !== null && area > 0"
      name="red"
      @click.native="next"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<script src="./index.js" />
<style src="./index.styl" lang="stylus"/>
