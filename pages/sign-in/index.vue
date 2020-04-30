<template>
  <div class="sign-in">
    <router-link
      to="/sign-in/password-recovery"
    >
      password recovery
    </router-link>

    <br><br><br><br>
    <input
      v-if="stage === 'phone'"
      id="one"
      v-model="picked"
      value="1"
      type="radio"
    >
    <label
      v-if="stage === 'phone'"
      for="one"
    >Правильный телефон</label>
    <input
      v-if="stage === 'phone'"
      id="two"
      v-model="picked"
      value="2"
      type="radio"
    >
    <label
      v-if="stage === 'phone'"
      for="two"
    >Телефон в стоп-листе</label>
    <input
      v-if="stage === 'pass'"
      id="three"
      v-model="picked"
      value="3"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="three"
    >Правильный пароль</label>
    <input
      v-if="stage === 'pass'"
      id="four"
      v-model="picked"
      value="4"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="four"
    >Неправильный пароль</label>
    <input
      v-if="stage === 'pass'"
      id="five"
      v-model="picked"
      value="5"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="five"
    >Пользователь заблокирован</label>
    <input
      v-if="stage === 'pass'"
      id="six"
      v-model="picked"
      value="6"
      type="radio"
    >
    <label
      v-if="stage === 'pass'"
      for="six"
    >Много попыток</label>

    <p>error: {{ error }}</p>

    <OcVerification>
      <OcPhoneNumber
        v-if="stage === 'phone'"
        :error="error"
        @next="next"
      />

      <p
        v-if="stage === 'timer'"
        class="p"
      >
        Вы превысили количество попыток ввода логина
        и пароля. Блокировка будет снята через:
      </p>

      <p
        v-if="stage === 'timer'"
        class="timer"
      >
        {{ timeCounter > 60 ? '1 минуту ' + (timeCounter - 60) + ' секунд' : '' + timeCounter + ' секунд' }}
      </p>

      <p
        v-if="stage === 'pass'"
        class="p456"
      >
        Введите пароль для логина <nobr><b>+7 {{ phone }}</b></nobr>
      </p>

      <OcPass
        v-if="stage === 'pass'"
        :error="error"
        btn-text="Далее"
        @next="next"
      />

      <a
        class="reg"
        :class="{ reg7: stage === 'timer' }"
        href="/sign-up"
      >
        Зарегистрироваться
      </a>

      <nuxt-link
        v-if="stage ==='pass'"
        class="reset"
        :to="{ name: 'sign-in-password-recovery', params: { phone }}"
      >
        Сбросить пароль
      </nuxt-link>
    </OcVerification>
  </div>
</template>

<script src="./index.js"/>

<style src="./index.styl" lang="stylus"/>
