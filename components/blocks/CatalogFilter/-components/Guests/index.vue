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
          :title="item.title"
          :sub-title="item.subTitle"
          :current="result[item.name]"
          @input="updateValue(item.name, $event)"
        />
      </li>
    </ul>
    <Footer
      class="guests__footer"
      @save="save"
      @clear="clear"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
