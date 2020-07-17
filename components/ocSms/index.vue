<template>
  <div class="sms-container">
    <p
      class="p-sms"
    >
      {{ recovery ? 'Для восстановления доступа введите код из смс' : 'Введите код из смс отправленного на номер' }} <br> {{ recovery ? 'отправленного на номер' : '' }} <nobr><b>+7 {{ phone && phone.slice(1) }}</b></nobr>
    </p>

    <input
      ref="codeInput"
      v-model="code"
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
      v-if="timeCounter > 0"
      class="timer"
      :class="{timerError: error !== ''}"
      href="#"
    >
      Отправить {{ timeCounter > 60 ? 'еще код через 1 минуту ' + (timeCounter - 60) + ' секунд' : 1 > timeCounter ? 'код ещё раз' :'еще код через ' + timeCounter + ' секунд' }}
    </a>
    <a
      v-else
      class="timer"
      :class="{timerError: error === ''}"
      href="#"
      @click.prevent.stop="$emit('oneMore')"
    >
      Отправить код еще раз
    </a>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl" scoped/>
