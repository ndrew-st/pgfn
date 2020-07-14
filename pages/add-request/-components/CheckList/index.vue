<template>
  <div
    class="check-container"
    :class="[type]"
  >
    <p class="check-container__title">
      {{ content.groupName }}
    </p>
    <ul class="check-container__list">
      <li
        v-for="item in content.params"
        :key="item.value"
        class="check-container__item item"
      >
        <OcInput
          v-model="current"
          :label="item.label"
          :icon="icon"
          :name="content.groupName"
          :kind="kind"
          icon-position="left"
          class="check-container__input"
          :type="type"
          :check-value="item.value"
        />
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
