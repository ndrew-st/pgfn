<template>
  <div>
    <p
      class="p15"
    >
      Введите имя и придумайте пароль
    </p>

    <div
      class="flex"
    >
      <input
        v-model="username"
        class="username"
        placeholder="Имя"
      >

      <input
        v-model="userpassword"
        class="userpassword"
        placeholder="Пароль"
        type="password"
      >

      <button
        class="btn13"
        :class="{ active_btn: username !== '' && userpassword.length > 5 }"
        @click="next"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.styl" lang="stylus" />
