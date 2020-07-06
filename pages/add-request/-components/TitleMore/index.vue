<template>
  <div class="title-more">
    <OcDropDown>
      <template #button="{ show }">
        <OcButton
          slot="button"
          name="title-more"
          icon="line-arrow"
          :active="show"
          class="title-more__button"
        >
          указать больше параметров
        </OcButton>
      </template>

      <div
        slot="body"
        class="title-more__content"
      >
        <slot>content</slot>
      </div>
    </OcDropDown>
  </div>
</template>

<style lang="stylus" src="./index.styl" scoped/>
