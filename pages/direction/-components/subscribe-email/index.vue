<template>
  <div class="subscribe">
    <div class="subscribe__main-container">
      <p
        v-if="success"
        class="subscribe__success"
      >
        Вы успешно подписаны!
      </p>
      <div
        v-else
        class="subscribe__container"
      >
        <h2 class="subscribe__title">
          Подпишитесь на свежие новости портала
        </h2>
        <form
          class="subscribe__form subscribe-form"
          @submit.prevent="handlerSubmit"
        >
          <OcInput
            v-model="email"
            type="email"
            kind="most"
            name="subsc"
            required
            class="subscribe-form__input"
            placeholder="Ваш электронный адрес"
          />
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
