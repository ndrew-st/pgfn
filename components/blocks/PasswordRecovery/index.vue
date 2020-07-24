<template>
  <div class="password-recovery">
    <client-only>
      <OcVerification>
        <OcSms
          v-if="stage === 'sms'"
          v-model="code"
          :phone="phone"
          :error="error"
          :time-counter="timeCounter"
          :recovery="true"
          @next="next"
        />

        <p
          v-if="stage === 'pass'"
          class="p15"
        >
          Придумайте пароль
        </p>

        <OcPass
          v-if="stage === 'pass'"
          :error="error"
          btn-text="Готово"
          @next="next"
        />

        <a
          href="#"
          class="go-back"
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
