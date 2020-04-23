<template>
  <div>
    <div class="margin20">
      <div
        class="input"
        @click="active = !active"
      >
        {{ interval }}
      </div>

      <div
        class="calendar"
        :class="{active: active}"
      >
        <div class="months">
          <OcMonth
            mode="start"
            :occupied-dates="occupiedDates"
            :cur-sel-date="curSelStart"
            :cur-opp-day="curSelFinish"
            class="first-month"
            @changeSelDate="changeSelDate"
          />

          <OcMonth
            mode="finish"
            :occupied-dates="occupiedDates"
            :cur-sel-date="curSelFinish"
            :cur-opp-day="curSelStart"
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

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
