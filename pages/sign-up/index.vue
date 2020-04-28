<template>
  <div class="sign-up">
    <br>
    <br>
    <br>
    <br>
    <div style="display: flex">
      <input
        v-if="stage === 'phone'"
        id="eight"
        v-model="picked"
        value="8"
        type="radio"
      >
      <label
        v-if="stage === 'phone'"
        for="eight"
      >Правильный номер</label>
      <input
        v-if="stage === 'phone'"
        id="nine"
        v-model="picked"
        value="9"
        type="radio"
      >
      <label
        v-if="stage === 'phone'"
        for="nine"
      >Неправильный номер</label>
      <input
        v-if="stage === 'sms'"
        id="ten"
        v-model="picked"
        value="10"
        type="radio"
      >
      <label
        v-if="stage === 'sms'"
        for="ten"
      >Код устарел</label>
      <input
        v-if="stage === 'sms'"
        id="eleven"
        v-model="picked"
        value="11"
        type="radio"
      >
      <label
        v-if="stage === 'sms'"
        for="eleven"
      >Код неправильный</label>
      <input
        v-if="stage === 'sms'"
        id="twelve"
        v-model="picked"
        value="12"
        type="radio"
      >
      <label
        v-if="stage === 'sms'"
        for="twelve"
      >Номер уже зарегистрирован</label>
      <input
        v-if="stage === 'sms'"
        id="thirteen"
        v-model="picked"
        value="13"
        type="radio"
      >
      <label
        v-if="stage === 'sms'"
        for="thirteen"
      >Код правильный</label>
    </div>

    <OcVerification>
      <OcPhoneNumber
        v-if="stage === 'phone'"
        :error="error"
        @next="next"
      />

      <OcSmsCode
        v-if="stage === 'sms'"
        :phone="phone"
        :error="error"
        :time-counter="timeCounter"
        @next="next()"
      />

      <p
        v-if="stage === 'userpass'"
        class="p15"
      >
        Введите имя и придумайте пароль
      </p>

      <div
        v-if="stage === 'userpass'"
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
          v-if="stage === 'userpass'"
          class="btn13"
          :class="{ active: username !== '' && userpassword.length > 5 }"
          @click="next"
        >
          Далее
        </button>
      </div>

      <a
        v-if="stage === 'sms' || stage === 'userpass'"
        href="#"
        class="goback"
      >
        Вернуться
      </a>

      <div
        v-if="stage === 'phone'"
      >
        <a
          class="enter-top"
          href="/sign-in"
        >
          Войти
        </a>

        <span
          class="lic"
        >
          Я принимаю условия
          <a
            href="#"
          >
            Пользовательского соглашения
          </a>
          и даю своё согласие на обработку моей персональной информации
        </span>

        <a
          class="enter-bottom"
          href="/sign-in"
        >
          Войти
        </a>
      </div>
    </OcVerification>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.styl" lang="stylus"></style>
