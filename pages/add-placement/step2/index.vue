<template>
  <div>
    <div class="ap-step2__flex">
      <div>
        <p class="add-placement__h">
          Тип жилья
        </p>

        <OcDropDown class="ap-step2__dd">
          <ApButton
            slot="button"
            name="filter"
          >
            {{ selItem ==='' ? 'Выберите тип жилья' : selItem }}
            <span class="add-placement__red-star">*</span>
          </ApButton>

          <ApListDropdown
            slot="body"
            :list="list"
            @selectItem="selectItem"
          />
        </OcDropDown>
      </div>

      <ApButton
        v-if="selItem2 !== ''"
        name="red"
        @click.native="$emit('next')"
      >
        Продолжить
      </ApButton>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
