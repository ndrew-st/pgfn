<template>
  <div class="all">
    <div class="box">
      <p class="h">
        Personal.Guide
      </p>

      <p class="p">
        Введите номер телефона
      </p>

      <div class="flex">
        <div class="sel-input">
          <select class="sel">
            <option>
              +7
            </option>
          </select>

          <input
            v-model="phoneNumber"
            class="input"
            type="text"
            @input="mask"
          >
        </div>

        <button
          class="btn"
          :class="{ active: isActive }"
        >
          Далее
        </button>
      </div>

      <a
        class="reg"
        href="#"
      >
        Зарегистрироваться
      </a>
    </div>
    <a
      href="#"
      class="copyright"
    >
      © 2020. Personal.Guide
    </a>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
