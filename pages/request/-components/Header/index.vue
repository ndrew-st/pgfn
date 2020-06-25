<template>
  <div class="header">
    <div class="header__top header-top">
      <div class="header-top__container">
        <OcButton
          name="arrow-prev"
          icon="line-arrow"
          class="header-top__prev"
          @click="$emit('prev')"
        >
          prev
        </OcButton>
        <ul class="header-top__list">
          <li
            v-for="item in text"
            :key="item.title"
            class="header-top__item"
          >
            <span class="header-top__item--desktop">{{ item.title }}</span>
            <span
              v-if="item.titleMob"
              class="header-top__item--mobile"
            >{{ item.titleMob }}</span>
          </li>
        </ul>

        <p
          class="header-top__save"
          :class="[{ 'loading': loading }, { 'error': error && !loading }]"
        >
          <span class="header-top__save--mobile">{{ saveText('mobile') }}</span>
          <span class="header-top__save--desktop">{{ saveText('desktop') }}</span>
        </p>
      </div>
    </div>

    <div class="header__stat-bar stat-bar">
      <OcIcon
        class="stat-bar__line"
        :width="statWidth"
        name="stat-bar"
      />

      <p class="stat-bar__description">
        шаг {{ step }}/{{ countSteps }}
      </p>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
