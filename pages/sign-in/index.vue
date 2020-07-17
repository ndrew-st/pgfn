<template>
  <div class="sign-in">
    <OcVerification>
      <OcPhoneNumber
        v-if="stage === 'phone'"
        v-model="phone"
        :error="error"
        type="login"
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
        Введите пароль для логина <nobr><b>+7 {{ phone.slice(1) }}</b></nobr>
      </p>

      <OcPass
        v-if="stage === 'pass'"
        v-model="pass"
        :error="error"
        btn-text="Далее"
        @next="next"
      />

      <nuxt-link
        class="reg"
        :class="{ reg7: stage === 'timer' }"
        to="/sign-up"
        @click="_clearData"
      >
        Зарегистрироваться
      </nuxt-link>

      <nuxt-link
        v-if="stage ==='pass'"
        class="reset"
        :to="{ name: 'sign-in-password-recovery', params: { phone }}"
        @click="_clearData"
      >
        Сбросить пароль
      </nuxt-link>

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
