<template>
  <div class="time-select-block">
    <p class="add-placement__h2 ap-step4__type-booking">
      {{ title }}
      <span class="add-placement__red-star">*</span>
    </p>

    <ApRadio
      :value="0"
      :checked="selectedValue === 0"
      label="Любое время и дни недели"
      class="ap-step4__radio-item ap-step4__radio"
      @change="change(0)"
    />

    <div class="ap-step4__flex-time">
      <ApRadio
        :value="1"
        :checked="selectedValue === 1"
        label="Любые дни недели с"
        class="ap-step4__radio"
        @change="change(1)"
      />

      <ApTimeSelect
        :sel-time="timeStart"
        class="time-select-block__time-block"
        @change="changeTime($event, 'start')"
      />

      <span>по</span>

      <ApTimeSelect
        :sel-time="timeEnd"
        class="time-select-block__time-block"
        @change="changeTime($event, 'end')"
      />
    </div>

    <OcDropDown class="time-select-block__drop-time">
      <template v-slot:button>
        <ApRadio
          :value="2"
          :checked="selectedValue === 2"
          label="Выбранные дни"
          class="ap-step4__radio"
          @change="change(2)"
        />
      </template>

      <template v-slot:body>
        <WeekTime
          :data="block3"
          class="time-select-block__drop-time-list"
          @change="changeDayCheckboxBlock3"
          @change-time="changeTimeBlock3"
        />
      </template>
    </OcDropDown>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
