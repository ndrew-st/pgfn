<template>
  <div class="group-cart">
    <div class="group-cart__title-container">
      <h2 class="group-cart__title">
        {{ title }}
      </h2>
      <span class="group-cart__count-articles">{{ count }}</span>
    </div>

    <div class="group-cart__checkboxes group-checkbox">
      <div class="group-checkbox__container">
        <ul class="group-checkbox__list">
          <li
            v-for="tab in tabs"
            :key="tab.url"
            class="group-checkbox__item"
          >
            <label
              :class="{ checked: tabSelect === tab.url }"
              class="group-checkbox__label"
            >
              <input
                v-model="tabSelect"
                :value="tab.url"
                type="radio"
                :name="`groups-card-${title}`"
                class="visually-hidden"
                @change="change(tab.url)"
              >
              {{ tab.name }}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="group-cart__slider-container">
      <Carousel
        v-if="!loading"
        :column="4"
        :items="items"
        :auto-width="autoWidth"
        :show="true"
        :nav="true"
      >
        <slot />
      </Carousel>
      <ocLoader v-else />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
