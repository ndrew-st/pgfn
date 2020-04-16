<template>
  <div>
    <div
      class="box"
      :class="{signin: mode === 'sign-in', signup: mode === 'sign-up'}"
    >
      <p class="h">
        Personal<span class="headline">.Guide</span>
      </p>

      <slot />

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
        1 минуту 59 секунд
      </p>

      <p
        v-if="stage === 'pass'"
        class="p456"
      >
        Введите пароль для логина <nobr><b>+7 {{ phone }}</b></nobr>
      </p>

      <p
        v-if="stage === 'userpass'"
        class="p15"
      >
        Введите имя и придумайте пароль
      </p>

      <p
        v-if="mode === 'recovery' && stage === 'pass'"
        class="p15"
      >
        Придумайте пароль
      </p>

      <OcPass
        v-if="stage === 'pass'"
        :mode="mode"
        :error="error"
        @next="next"
      />

      <p
        v-if="mode === 'recovery' && stage === 'phone'"
        class="p14"
      >
        Для восстановления доступа введите код из смс <br>
        отправленного на номер <b>+7 {{ phone }}</b>
      </p>

      <div v-if="stage === 'phone'">
        <p class="p15">
          Введите номер телефона
        </p>

        <div class="flex">
          <div>
            <OcPhoneNumber
              :stage="stage"
              :error="error"
              @cpn2="cpn2"
            />

            <p
              v-if="error === 'wrongNumber'"
              class="red-p"
            >
              Номер не может быть использован для входа
            </p>
          </div>

          <button
            class="btn"
            :class="{ active: phone.length === 13, sp: stage === 'phone' }"
            @click="next"
          >
            Далее
          </button>
        </div>
      </div>

      <p
        v-if="mode === 'sign-up' && stage === 'sms'"
        class="p-sms"
      >
        Введите код из смс отправленного на номер <nobr><b>{{ phone }}</b></nobr>
      </p>

      <input
        v-if="stage === 'sms'"
        ref="codeInput"
        type="text"
        :class="{ code14: mode === 'recovery', code: mode !== 'recovery' }"
        placeholder="••••"
        @input="mask"
      >

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
          :class="{ active: username !== '' && userpassword !== '' }"
        >
          Далее
        </button>
      </div>

      <p
        v-if="stage === 'sms' && error === 'old-code'"
        class="old-code"
      >
        Данный код устарел. Пожалуйста, получите новый код в смс
      </p>

      <p
        v-if="stage === 'sms' && error === 'wrong-code'"
        class="old-code"
      >
        Неверный код подтверждения
      </p>

      <p
        v-if="stage === 'sms' && error === 'number-exists'"
        class="old-code"
      >
        Номер телефона уже зарегистрирован в системе
      </p>

      <a
        v-if="stage === 'sms' && error === ''"
        class="send-again-timer9"
        href="#"
      >
        Отправить еще код через 1 мин. 59 сек.
      </a>

      <a
        v-if="error === 'wrong-code' || error === 'number-exists'"
        class="send-again-timer11"
        href="#"
      >
        Отправить еще код через 1 мин. 59 сек.
      </a>

      <a
        v-if="error === 'old-code'"
        class="send-again-link "
        href="#"
      >
        Отправить код ещё раз
      </a>

      <a
        v-if="stage === 'sms' || stage === 'userpass'"
        :class="{ goback28: error === 'old-code' || stage === 'userpass', goback48: !(error === 'old-code' || stage === 'userpass') }"
        href="#"
      >
        Вернуться
      </a>

      <a
        v-if="mode === 'sign-in'"
        class="reg"
        :class="{ reg7: stage === 'timer' }"
        href="#"
      >
        Зарегистрироваться
      </a>

      <p
        v-if="mode === 'sign-in' && error !== ''"
        class="reset"
      >
        Сбросить пароль
      </p>

      <div
        v-if="mode === 'sign-up' && stage === 'phone'"
      >
        <a
          class="enter-top"
          href="#"
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
          href="#"
        >
          Войти
        </a>
      </div>
    </div>

    <a
      href="#"
      class="copyright"
    >
      © 2020. Personal.Guide
    </a>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
