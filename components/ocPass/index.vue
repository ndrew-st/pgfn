<template>
  <div>
    <div class="flex">
      <div>
        <input
          v-model="password"
          class="pass"
          type="password"
          placeholder="Пароль"
          :class="{red: error !== '', norm: error === ''}"
          @change="change"
          @keyup.enter="next()"
        >

        <p
          v-if="error !== ''"
          class="red-p"
        >
          {{ error }}
        </p>
      </div>

      <button
        class="btn"
        :class="{ active: password.length > 5, sp: error !== '' }"
        @click="next"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
