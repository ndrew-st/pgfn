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
          @input="setPass($event.target.value)"
        >

        <p
          v-if="$v.password.$dirty"
          class="red-p"
        >
          <span v-if="!$v.password.required">Поле пароль обязательно!</span>
          <span v-if="!$v.password.minLength">Минимальная длина 8 символов! Сейчас: {{ $v.password.$model.length }}</span>
          <span v-if="!$v.password.isHaveNumber && $v.password.required && $v.password.minLength">Пароль должен содержать минимум одно число!</span><br>
          <span v-if="!$v.password.isUpperCase && $v.password.required && $v.password.minLength">Пароль должен содержать минимум одну заглавную букву!</span>
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
