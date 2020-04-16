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
        :class="{active: password !== '', sp: error !== '' }"
        @click="next1"
      >
        Далее
      </button>

      <button
        v-if="mode !== 'sign-in'"
        class="btn"
        :class="{active: password !== ''}"
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
