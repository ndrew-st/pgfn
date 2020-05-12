<template>
  <div
    class="popup"
    :class="{ 'show-popup': showPopup }"
    @click.self="$emit('toggle', false)"
  >
    <div
      class="popup__container"
    >
      <div class="popup__header popup-header">
        <button
          type="button"
          class="popup-header__button-close"
          @click="$emit('toggle', false)"
        >
          закрыть
        </button>
        <p class="popup-header__counter">
          {{ activeIndex + 1 }}/{{ length }}
        </p>
      </div>
      <div
        class="popup__content"
      >
        <slot />
      </div>
      <div class="popup__footer">
        <p class="popup__counter">
          {{ activeIndex + 1 }}/{{ length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
