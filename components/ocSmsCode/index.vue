<template>
  <div>
    <p
      class="p-sms"
    >
      Введите код из смс отправленного на номер <br><nobr><b>+7 {{ phone }}</b></nobr>
    </p>

    <input
      ref="codeInput"
      class="code code14"
      type="text"
      placeholder="••••"
      @input="mask"
    >

    <p
      v-if="error !== ''"
      class="error"
    >
      {{ error }}
    </p>

    <a
      class="timer"
      :class="{timerError: error !== ''}"
      href="#"
    >
      Отправить {{ timeCounter > 60 ? 'еще код через 1 минуту ' + (timeCounter - 60) + ' секунд' : 1 > timeCounter ? 'код ещё раз' :'еще код через ' + timeCounter + ' секунд' }}
    </a>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.styl" lang="stylus"></style>
