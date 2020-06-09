<template>
  <div class="apartments">
    <ul class="apartments__list">
      <li class="apartments__item apartment">
        <OcInput
          v-model="search"
          label="Где"
          kind="most"
          placeholder="Где угодно"
          @input="handlerSearch"
        />

        <!--        <OcSearchList-->
        <!--          v-if="searchedList.length"-->
        <!--          type="link"-->
        <!--          :content="content"-->
        <!--        />-->
      </li>
      <li class="apartments__item apartment">
        <OcInput
          label="Прибытие, выезд"
          placeholder="дд.мм.гггг – дд.мм.гггг"
          kind="most"
          readonly
        />

        <!--        <Calendar-->
        <!--          @input="handlerDate"-->
        <!--        />-->
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
            class="apartment__content"
            @input="handlerGuests"
          />
        </OcDropDown>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
