<template>
  <div class="filter">
    <Checkboxes
      :current-tab="currentActive"
      :items="checkboxes"
      @input="changeTab"
    />

    <div class="filter__container">
      <keep-alive>
        <component
          :is="currentActive"
          class="filter__content"
          @input="updateValue"
        />
      </keep-alive>
      <OcButton
        class="filter__submit"
        kind="most"
        color="blue"
        @click="submit"
      >
        Поиск
      </OcButton>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" scoped src="./index.styl"/>
