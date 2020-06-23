<template>
  <div class="profile-page">
    <p class="p1">
      Личная информация
    </p>

    <div class="div1">
      <p class="p2">
        Ваше имя
      </p>

      <p class="p3">
        {{ userName }}
      </p>

      <div v-if="activeName">
        <OcInput
          type="text"
          kind="most"
          class="input-name"
          placeholder="Новое имя"
        />
        <input
          type="button"
          value="Сохранить"
          class="btn-save"
        >
      </div>

      <div
        class="change-button"
        @click="change('name')"
      >
        {{ activeName ? 'Закрыть' : 'Изменить' }}
      </div>
    </div>

    <div class="div1">
      <p class="p2">
        Номер телефона
      </p>

      <p class="p3">
        {{ userPhone }}
      </p>
    </div>

    <div class="div1">
      <p class="p2">
        Безопасность
      </p>

      <p class="p3">
        Пароль
      </p>

      <div v-if="activePass">
        <OcInput
          type="password"
          kind="most"
          class="input-name"
          placeholder="Новый пароль"
        />

        <input
          type="button"
          value="Сохранить"
          class="btn-save"
        >
      </div>

      <div
        class="change-button"
        @click="change('pass')"
      >
        {{ activePass ? 'Закрыть' : 'Изменить' }}
      </div>
    </div>

    <List
      type="history"
      title="История бронирования"
      :list="history"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
