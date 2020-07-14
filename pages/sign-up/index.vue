<template>
  <div class="sign-up">
    <OcVerification>
      <OcPhoneNumber
        v-if="stage === 'phone'"
        v-model="phone"
        :error="error"
        @next="next"
      />

      <OcSms
        v-if="stage === 'sms'"
        v-model="code"
        :phone="phone"
        :error="error"
        :time-counter="timeCounter"
        @next="next"
      />

      <UserPass
        v-if="stage ==='userpass'"
        @next="register"
      />

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

        <p
          class="lic"
        >
          Я принимаю условия
          <a
            href="#"
            class="lic__privacy"
          >
            Пользовательского соглашения
          </a>
          и даю своё согласие на обработку моей персональной информации
        </p>
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

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
