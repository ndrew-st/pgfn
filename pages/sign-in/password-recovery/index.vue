<template>
  <div class="password-recovery">
    <OcVerification>
      <OcSms
        v-if="stage === 'sms'"
        :phone="$route.params.phone"
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
        error=""
        btn-text="Готово"
        @next="next"
      />
    </OcVerification>
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus"/>
