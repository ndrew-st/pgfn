<template>
  <div class="container">
    <h3 class="container__title">
      {{ title }}
    </h3>

    <ul
      v-if="list.length"
      class="container__list"
    >
      <li
        v-for="item in list"
        :key="item.id"
        class="container__item"
      >
        <Card
          :type="type"
          :item="item"
        />
      </li>
    </ul>

    <p
      v-else-if="type === 'history'"
      class="container__nothing"
    >
      Пока вы не забронировали ни одного типа жилья, после бронирования жилья они отобразяться здесь.
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
