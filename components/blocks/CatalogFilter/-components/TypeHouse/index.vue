<template>
  <div class="type-filter">
    <ul class="type-filter__list">
      <li
        v-for="item in list"
        :key="item.value"
        class="type-filter__item"
      >
        <OcCheckbox
          :key="date"
          v-model="select"
          icon="check"
          kind="most"
          :name="$options.name"
          :label="item.label"
          :check-value="item.value"
        />
      </li>
    </ul>
    <Footer
      @save="save"
      @clear="clear"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
