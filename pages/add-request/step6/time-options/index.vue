<template>
  <div>
    <ApRadio
      :value="0"
      :checked="selectedValue === 0"
      label="Круглосуточно"
      class="ap-step4__radio-item ap-step4__radio"
      @change="change(0)"
    />

    <div class="ap-step4__flex-time">
      <ApRadio
        :value="1"
        :checked="selectedValue === 1"
        label="С"
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
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<style src="../../../add-placement/step4/index.styl" lang="stylus"/>

<style src="../../../add-placement/step4/time-select-block/index.styl" lang="stylus"/>

<script src="./index.js" />
