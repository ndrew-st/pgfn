<template>
  <div class="sign-in">
    <client-only>
      <OcVerification>
        <OcPhoneNumber
          v-if="stage === 'phone'"
          v-model="phone"
          :error="error"
          type="login"
          @next="next"
        />

        <div
          v-if="phone && stage === 'recovery'"
          class="sign-in__container"
        >
          <p class="sign-in__text">
            Поздравляем! Пароль успешно изменен.
          </p>
          <p class="sign-in__text">
            Введите пароль для логина <nobr><b>+7 {{ phone.slice(1) }}</b></nobr>
          </p>
        </div>

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
          v-if="stage === 'pass' || stage === 'recovery'"
          v-model="pass"
          :error="error"
          btn-text="Далее"
          @next="next"
        />

        <nuxt-link
          class="reg"
          :class="{ reg7: stage === 'timer' }"
          to=""
          @click.native="_clearData"
        >
          Зарегистрироваться
        </nuxt-link>

        <nuxt-link
          v-if="stage ==='pass'"
          class="reset"
          to="/sign-in/recovery"
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
    </client-only>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
