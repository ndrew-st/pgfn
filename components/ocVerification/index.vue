<template>
  <div>
    <div
      class="box"
      :class="{signin: stage === '1' || stage === '2' || stage === '3' || stage === '4' || stage === '5' || stage === '6' || stage === '7' || stage === '15', signup: stage === '8' || stage === '9' || stage === '10' || stage === '11' || stage === '12' || stage === '13' || stage === '14'}"
    >
      <p class="h">
        Personal<span class="headline">.Guide</span>
      </p>

      <p
        v-if="stage === '7'"
        class="p"
      >
        Вы превысили количество попыток ввода логина
        и пароля. Блокировка будет снята через:
      </p>

      <p
        v-if="stage === '7'"
        class="timer"
      >
        1 минуту 59 секунд
      </p>

      <p
        v-if="stage === '4' || stage === '5' || stage === '6'"
        class="p456"
      >
        Введите пароль для логина <nobr><b>+7 {{ phoneNumber }}</b></nobr>
      </p>

      <p
        v-if="stage === '13'"
        class="p15"
      >
        Введите имя и придумайте пароль
      </p>

      <p
        v-if="stage === '15'"
        class="p15"
      >
        Придумайте пароль
      </p>

      <OcPass
        v-if="stage === '4' || stage === '5' || stage === '6' || stage === '15'"
        :stage="stage"
      />

      <p
        v-if="stage === '14'"
        class="p14"
      >
        Для восстановления доступа введите код из смс <br>
        отправленного на номер <b>+7 {{ phoneNumber }}</b>
      </p>

      <OcPhoneNumber
        v-if="stage === '1' || stage === '2' || stage === '3' || stage === '8'"
        :stage="stage"
        :phone-number="phoneNumber"
        @changePhoneNumber="changePhoneNumber"
      />

      <p
        v-if="stage === '9' || stage === '10' || stage === '11' || stage === '12'"
        class="p-sms"
      >
        Введите код из смс отправленного на номер <nobr><b>{{ phoneNumber }}</b></nobr>
      </p>

      <input
        v-if="stage === '9' || stage === '10' || stage === '11' || stage === '12' || stage === '14'"
        ref="codeInput"
        type="text"
        :class="{ code14: stage === '14', code: stage !== '14' }"
        placeholder="••••"
        @input="mask"
      >

      <div
        v-if="stage === '13'"
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
          v-if="stage === '13'"
          class="btn13"
          :class="{ active: username !== '' && userpassword !== '' }"
        >
          Далее
        </button>
      </div>

      <p
        v-if="stage === '10'"
        class="old-code"
      >
        Данный код устарел. Пожалуйста, получите новый код в смс
      </p>

      <p
        v-if="stage === '11'"
        class="old-code"
      >
        Неверный код подтверждения
      </p>

      <p
        v-if="stage === '12'"
        class="old-code"
      >
        Номер телефона уже зарегистрирован в системе
      </p>

      <a
        v-if="stage === '9' || stage === '14'"
        class="send-again-timer9"
        href="#"
      >
        Отправить еще код через 1 мин. 59 сек.
      </a>

      <a
        v-if="stage === '11' || stage === '12'"
        class="send-again-timer11"
        href="#"
      >
        Отправить еще код через 1 мин. 59 сек.
      </a>

      <a
        v-if="stage === '10'"
        class="send-again-link"
        href="#"
      >
        Отправить код ещё раз
      </a>

      <a
        v-if="stage === '9' || stage === '10' || stage === '11' || stage === '12' || stage === '13' || stage === '14'"
        :class="{ goback28: stage === '10' || stage === '13', goback48: stage === '9' || stage === '11' || stage === '12' || stage === '14' }"
        href="#"
      >
        Вернуться
      </a>

      <a
        v-if="stage === '1' || stage === '2' || stage === '3' || stage === '4' || stage === '5' || stage === '6' || stage === '7'"
        class="reg"
        :class="{ reg7: stage === '7' }"
        href="#"
      >
        Зарегистрироваться
      </a>

      <p
        v-if="stage === '5' || stage === '6' || stage === '7'"
        class="reset"
      >
        Сбросить пароль
      </p>

      <div
        v-if="stage === '8'"
      >
        <a
          v-if="stage === '8'"
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
          v-if="stage === '8'"
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
