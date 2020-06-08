<template>
  <div class="guests">
    <ul class="guests__list">
      <li
        v-for="item in list"
        :key="item.title"
        class="guests__item"
      >
        <Counter
          :key="date"
          class="guests__counter"
          :title="item.title"
          :current="peoples[item.name]"
          :sub-title="item.subTitle"
          @input="updateValue(item.name, $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
