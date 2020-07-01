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
          kind="checkbox"
          :name="$options.name"
          :label="item.label"
          :check-value="item.value"
          @input="updateValue"
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
