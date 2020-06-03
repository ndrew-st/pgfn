<template>
  <div class="apartments">
    <ul class="apartments__list">
      <li class="apartments__item apartment">
        <label class="apartment__title">
          <span class="apartment__title--text">Где</span>
          <OcInput
            v-model="search"
            kind="most"
            type="text"
            placeholder="Где угодно"
            @input="handlerSearch"
          />
        </label>

        <ul
          v-if="searchedList.length"
          class="apartment__result-list"
        >
          <li
            v-for="item in searchedList"
            :key="item.title"
            class="apartment__result-item"
          >
            <nuxt-link
              class="apartment__result-link"
              to=""
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="apartments__item apartment">
        <h3 class="apartment__title">
          Прибытие, выезд
        </h3>
        <Calendar
          @input="handlerDate"
        />
      </li>
      <li class="apartments__item apartment">
        <h3 class="apartment__title">
          Гости
        </h3>
        <Guests
          @input="handlerGuests"
        />
      </li>
    </ul>
    <button
      type="button"
      class="apartments__submit"
      @click="handlerSubmit"
    >
      поиск
    </button>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
