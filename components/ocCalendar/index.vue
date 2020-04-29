<template>
  <div>
    <div class="margin20 filter-calendar">
      <div
        @click="active = !active"
        class="input">
        {{ interval }}
      </div>

      <div
        :class="{active: active}"
        class="calendar filter-calendar__content">
        <div class="months">
          <OcMonth
            :occupied-dates="occupiedDates"
            :cur-sel-date="curSelStart"
            :cur-opp-day="curSelFinish"
            @changeSelDate="changeSelDate"
            mode="start"
            class="first-month"/>

          <OcMonth
            :occupied-dates="occupiedDates"
            :cur-sel-date="curSelFinish"
            :cur-opp-day="curSelStart"
            @changeSelDate="changeSelDate"
            mode="finish"
            class="second-month"/>
        </div>

        <div class="flex">
          <div class="clear-div">
            <span
              @click="clear()"
              class="clear">
              Очистить
            </span>
          </div>

          <div class="save-div">
            <span
              @click="save()"
              class="save">
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
