<template>
  <div class="sign-up">
    <client-only>
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
          @click.capture="clear"
        >
          <nuxt-link
            class="enter-top"
            to=""
            @click.native="showPopup('signIn')"
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
            >
              Пользовательского соглашения
            </nuxt-link>
            и даю своё согласие на обработку моей персональной информации
          </p>

          <div class="sign-up__button-container">
            <nuxt-link
              to="/sign-in"
              class="enter-bottom"
            >
              Войти
            </nuxt-link>
          </div>
        </div>

        <div
          v-if="stage === 'success'"
          class="sign-up-success"
        >
          <p class="sign-up-success__text">
            Поздравляем! Регистрация успешно завершена.
          </p>
          <p class="sign-up-success__text">
            Куда Вы хотели бы переместиться?
          </p>
          <div class="sign-up-success__container">
            <nuxt-link
              to=""
              class="sign-up-success__link"
              @click.native.prevent.stop="hide"
            >
              На главную страницу
            </nuxt-link>
            <nuxt-link
              to="/profile"
              class="sign-up-success__link"
              @click.native="hide"
            >
              В личный кабинет
            </nuxt-link>
          </div>
        </div>

        <a
          href="#"
          class="go-back"
          :class="[{'first': stage === 'phone'}]"
          @click.prevent="prevent"
        >
          Вернуться
        </a>
      </OcVerification>
    </client-only>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
