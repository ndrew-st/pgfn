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
            <span
              class="clear"
              @click="clear()"
            >
              Очистить
            </span>
          </div>

          <div class="save-div">
            <span
              class="save"
              @click="save()"
            >
              Сохранить
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
