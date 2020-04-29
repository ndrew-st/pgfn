<template>
  <div class="subscribe">
    <div class="subscribe__main-container">
      <p
        v-if="success"
        class="subscribe__success">Вы успешно подписаны!</p>
      <div
        v-else
        class="subscribe__container">
        <h2 class="subscribe__title">Подпишитесь, и мы вышлем вам лучшие предложения</h2>
        <form
          @submit.prevent="handlerSubmit"
          class="subscribe__form subscribe-form">
          <label class="subscribe-form__label">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Ваш электронный адрес"
              class="subscribe-form__input">
          </label>
          <button class="subscribe-form__submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"/>
<style lang="stylus" src="./index.styl"/>
