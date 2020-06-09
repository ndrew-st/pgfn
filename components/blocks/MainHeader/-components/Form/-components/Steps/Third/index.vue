<template>
  <div class="step-container">
    <h3 class="step-container__title">
      Добавить гостей
    </h3>

    <Guests
      @input="update"
    />
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
