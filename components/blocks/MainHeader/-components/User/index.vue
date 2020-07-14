<template>
  <div class="header-user">
    <OcDropDown>
      <button
        slot="button"
        class="header-user__toggle toggle"
      >
        <img
          v-if="user.avatar"
          :src="user.avatar"
          :alt="user.name"
          class="toggle__img"
        >

        <span
          v-else
          class="toggle__img-container"
        >
          {{ user.name.substr(0, 1).toUpperCase() }}
        </span>

        <span class="toggle__text">{{ user.name }}</span>
      </button>

      <ul
        slot="body"
        class="header-user__list"
      >
        <li
          v-for="item in list"
          :key="item.title"
          class="header-user__item"
        >
          <button
            type="button"
            class="header-user__button"
            @click="handlerClick(item.action)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </OcDropDown>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
