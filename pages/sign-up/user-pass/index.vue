<template>
  <div>
    <p class="p15">
      Введите имя и придумайте пароль
    </p>

    <div class="flex">
      <form
        class="flex__input-container form-user-pass"
        @submit.prevent="submit"
      >
        <label class="form-user-pass__label">
          <input
            v-model="username"
            class="username"
            placeholder="Имя"
            @input="setName($event.target.value)"
          >

          <p
            v-if="$v.username.$dirty"
            class="flex__error"
          >
            <span v-if="!$v.username.required">Имя обязательно!</span>
            <span v-if="!$v.username.minLength">Минимальная длина 2 символа!</span>
            <span v-if="!$v.username.maxLength">Максимальная длина 15 символов!</span>
          </p>
        </label>

        <label class="form-user-pass__label form-user-pass__label--password">
          <input
            v-model="userpassword"
            class="userpassword"
            placeholder="Пароль"
            type="password"
            @input="setPass($event.target.value)"
          >

          <p
            v-if="$v.userpassword.$dirty"
            class="flex__error"
          >
            <span v-if="!$v.userpassword.required">Поле пароль обязательно!</span>
            <span v-if="!$v.userpassword.minLength">Минимальная длина 8 символов! Сейчас: {{ $v.userpassword.$model.length }}</span>
            <span v-if="!$v.userpassword.isHaveNumber && $v.userpassword.required && $v.userpassword.minLength">Пароль должен содержать минимум одно число!</span><br>
            <span v-if="!$v.userpassword.isUpperCase && $v.userpassword.required && $v.userpassword.minLength">Пароль должен содержать минимум одну заглавную букву!</span>
          </p>
        </label>

        <p
          v-if="error"
          class="flex__error"
        >
          {{ error }}
        </p>

        <button
          class="btn13"
          :disabled="$v.$invalid"
        >
          Далее
        </button>
      </form>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" />
