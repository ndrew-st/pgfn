<template>
  <div>
    <div class="margin20 filter-calendar">
      <OcInput
        readonly
        kind="most"
        type="text"
        :placeholder="interval"
      />

      <div
        :class="{active: active}"
        class="calendar filter-calendar__content"
      >
        <div class="months">
          <OcMonth
            :occupied-dates="occupiedDates"
            :cur-sel-date="curSelStart"
            :cur-opp-day="curSelFinish"
            mode="start"
            class="first-month"
            @changeSelDate="changeSelDate"
          />

          <OcMonth
            :occupied-dates="occupiedDates"
            :cur-sel-date="curSelFinish"
            :cur-opp-day="curSelStart"
            mode="finish"
            class="second-month"
            @changeSelDate="changeSelDate"
          />
        </div>

        <div class="flex">
          <div class="clear-div">
            <OcButton
              class="clear"
              name="transparent"
              add-class="filter-button filter-button__clear"
              @click="clear()"
            >
              Очистить
            </OcButton>
          </div>

          <div class="save-div">
            <OcButton
              class="save"
              name="transparent"
              add-class="filter-button filter-button__save"
              @click="save()"
            >
              Сохранить
            </OcButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
