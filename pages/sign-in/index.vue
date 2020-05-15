<template>
  <div class="sign-in">
    <OcVerification>
      <OcPhoneNumber
        v-if="stage === 'phone'"
        :error="error"
        v-model="phone"
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
        v-model="pass"
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
