<template>
  <div class="apartments">
    <ul class="apartments__list">
      <li class="apartments__item apartment">
        <OcDropDown>
          <OcInput
            slot="button"
            v-model="search"
            label="Где"
            kind="most"
            placeholder="Где угодно"
            @input="handlerSearch"
          />

          <OcSelectList
            v-if="searchedList.length"
            slot="body"
            class="apartment__select-content"
            type="link"
            :content="searchedList"
            @input="select"
          />
        </OcDropDown>
      </li>
      <li class="apartments__item apartment">
        <OcDropDown>
          <OcInput
            slot="button"
            v-model="date"
            label="Прибытие, выезд"
            placeholder="дд.мм.гггг – дд.мм.гггг"
            kind="most"
            readonly
          />
          <Calendar
            slot="body"
            :key="curDate"
            :cur-sel-date="curSelStart"
            class="apartment__date-content"
            @input="changeSelDate"
          />
        </OcDropDown>
      </li>
      <li class="apartments__item apartment">
        <OcDropDown>
          <OcInput
            slot="button"
            label="Гости"
            placeholder="Гости"
            kind="most"
            readonly
          />

          <Guests
            slot="body"
            :guests="guests"
            class="apartment__content"
            @input="guests = $event"
          />
        </OcDropDown>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
