<template>
  <div>
    <ApRadio
      :id="'id-1-'+name"
      v-model="selTime"
      :name="name"
      value="allTime"
      label="Круглосуточно"
      class="ap-step4__radio-item ap-step4__radio"
    />

    <div class="flex">
      <ApRadio
        :id="'id-2-'+name"
        v-model="selTime"
        :name="name"
        value="timeSel"
        label="с"
        class="ap-step4__radio"
      />

      <ApTimeSelect class="ap-step4__time-block" />

      <span>по</span>

      <ApTimeSelect class="ap-step4__time-block" />
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
