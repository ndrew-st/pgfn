<template>
  <div class="apartments">
    <ul class="apartments__list">
      <li class="apartments__item apartment">
        <h3 class="apartment__title">Где</h3>
        <label class="apartment__label">
          <input
            v-model="search"
            @input="throttledSearch"
            placeholder="Где угодно"
            type="text"
            class="apartment__input">
        </label>
      </li>
      <li class="apartments__item apartment">
        <h3 class="apartment__title">Прибытие, выезд</h3>
        <Calendar
          @input="handlerDate"/>
      </li>
      <li class="apartments__item apartment">
        <h3 class="apartment__title">Гости</h3>
        <Guests
          @input="handlerGuests"
        />
      </li>
    </ul>
    <button
      @click="handlerSubmit"
      type="button"
      class="apartments__submit">поиск</button>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
