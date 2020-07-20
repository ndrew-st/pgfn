<template>
  <div class="room-counter__container">
    <div
      class="room-counter__input"
      @click="changeActive"
    >
      {{ textForInput }}
    </div>

    <div
      v-if="active"
      class="room-counter__dropdown"
    >
      <ul
        v-for="(item, index) in roomsArray"
        :key="index"
        class="room-counter__ul"
      >
        <li>
          <ApCheckbox
            :checked="item.checked"
            @change="change($event, index)"
          >
            {{ item.title }}
          </ApCheckbox>
        </li>
      </ul>

      <div class="room-counter__flex-btn">
        <button
          class="room-counter__ready-btn"
          @click="active=false"
        >
          Готово
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
