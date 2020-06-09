<template>
  <div class="step-container">
    <h3 class="step-container__title">
      Укажите даты
    </h3>

    <div class="step-container__date-container date-container">
      <ul class="date-container__list">
        <li
          v-for="{ name } in list"
          :key="name"
          class="date-container__item"
        >
          <OcInput
            v-model="$data[name]"
            kind="date"
            placeholder="дд.мм.гггг"
            mask="дд.мм.ггггг"
            :active="mode === name"
            class="date-container__input"
            @focus="focus(name)"
          />
        </li>
      </ul>

      <Calendar
        :key="curDate"
        :mode="mode"
        :cur-sel-date="curSelStart"
        class="step-container__date-content"
        @changeSelDate="changeSelDate"
      />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
