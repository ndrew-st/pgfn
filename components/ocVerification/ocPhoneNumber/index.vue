<template>
  <div>
    <p class="p">
      Введите номер телефона
    </p>

    <div class="flex">
      <div>
        <div
          class="sel-input"
          :class="{red: stage === '3', norm: stage !== '3'}"
        >
          <select
            class="sel"
          >
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

        <p
          v-if="stage === '3'"
          class="red-p"
        >
          Номер не может быть использован для входа
        </p>
      </div>

      <button
        class="btn"
        :class="{ active: isActive, sp: stage === '3' }"
        @click="next"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
