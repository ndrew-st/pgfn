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
          @keyup.enter="next1()"
        >

        <p
          v-if="error === 'wrongPass'"
          class="red-p"
        >
          Неверная комбинация логина и пароля
        </p>

        <p
          v-if="error === 'userBlocked'"
          class="red-p"
        >
          Пользователь заблокирован
        </p>
      </div>

      <button
        v-if="mode === 'sign-in'"
        class="btn"
        :class="{active: password.length > 5, sp: error !== '' }"
        @click="next1"
      >
        Далее
      </button>

      <button
        v-if="mode !== 'sign-in'"
        class="btn"
        :class="{active: password.length > 5}"
      >
        Готово
      </button>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
