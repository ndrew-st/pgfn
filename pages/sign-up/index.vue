<template>
  <div class="sign-up">
    <OcVerification>
      <OcPhoneNumber
        v-if="stage === 'phone'"
        v-model="phone"
        type="register"
        :error="error"
        @next="next"
      />

      <OcSms
        v-if="stage === 'sms'"
        v-model="code"
        :phone="phone"
        :error="error"
        :expire-at="timeCounter"
        @oneMore="oneMore"
        @next="next"
      />

      <UserPass
        v-if="stage ==='userpass'"
        :error="error"
        @next="register"
      />

      <div
        v-if="stage === 'phone'"
        class="sign-up__container"
      >
        <nuxt-link
          class="enter-top"
          to="/sign-in"
          @click.native="_clearData()"
        >
          Войти
        </nuxt-link>

        <p
          class="lic"
        >
          Я принимаю условия
          <nuxt-link
            to="/privacy"
            class="lic__privacy"
            @click.native="_clearData()"
          >
            Пользовательского соглашения
          </nuxt-link>
          и даю своё согласие на обработку моей персональной информации
        </p>

        <div class="sign-up__button-container">
          <nuxt-link
            to="/sign-in"
            class="enter-bottom"
            @click.native="_clearData()"
          >
            Войти
          </nuxt-link>
        </div>
      </div>

      <a
        href="#"
        class="go-back"
        :class="[{'first': stage === 'phone'}]"
        @click.prevent.stop="prevent"
      >
        Вернуться
      </a>
    </OcVerification>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
