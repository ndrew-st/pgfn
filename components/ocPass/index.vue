<template>
  <div>
    <div class="flex">
      <div>
        <input
          v-model="password"
          class="pass"
          type="password"
          placeholder="Пароль"
          :class="{red: stage === '5' || stage === '6', norm: !(stage === '5' || stage === '6')}"
        >

        <p
          v-if="stage === '5'"
          class="red-p"
        >
          Неверная комбинация логина и пароля
        </p>

        <p
          v-if="stage === '6'"
          class="red-p"
        >
          Пользователь заблокирован
        </p>
      </div>

      <button
        v-if="stage !== '15'"
        class="btn"
        :class="{active: password !== '', sp: stage === '5' || stage === '6' }"
        @click="next1"
      >
        Далее
      </button>

      <button
        v-if="stage === '15'"
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
