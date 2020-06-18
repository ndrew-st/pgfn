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
            <OcRadio
              v-model="tabSelect"
              :check-value="tab.url"
              :name="`groups-card-${title}`"
              kind="group"
              :label="tab.name"
              @change="change"
            />
          </li>
        </ul>
      </div>
    </div>

    <div class="group-cart__slider-container">
      <OcCarousel
        v-if="!loading"
        :column="4"
        :items="items"
        :auto-width="autoWidth"
        :show="true"
        :nav="true"
      >
        <slot />
      </OcCarousel>
      <OcLoader v-else />
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
