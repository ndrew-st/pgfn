<template>
  <div>
    <p class="p15">
      Введите номер телефона
    </p>

    <div class="flex">
      <div
        class="sel-input"
        :class="{red: error !== ''}"
      >
        <select
          class="sel"
        >
          <option>
            +7
          </option>
        </select>

        <input
          :key="key"
          v-model="phone1"
          class="input"
          type="text"
          @keyup.enter="next()"
          @input="mask()"
        >
      </div>

      <button
        class="btn sp"
        :class="{ active: phone1.length === 13}"
        @click="next()"
      >
        Далее
      </button>
    </div>

    <p
      v-if="er !== '' || error !== ''"
      class="red-p"
    >
      {{ er || error }}
    </p>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
