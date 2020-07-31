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
        {{ user.name }}
      </p>

      <div
        v-if="activeName"
        class="profile-page__cont"
      >
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
        {{ user.phone }}
      </p>
    </div>

    <div class="div1">
      <p class="p2">
        Безопасность
      </p>

      <p class="p3">
        Пароль
      </p>

      <div
        v-if="activePass"
        class="profile-page__cont"
      >
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
      class="profile-page__list"
      type="history"
      title="История бронирования"
      :list="history === undefined ? [] : history.history"
    />

    <List
      class="profile-page__list"
      type="ads"
      title="Добавленные объявления"
      :list="ads === ads ? [] : ads.ads"
    />

    <List
      class="profile-page__list"
      type="request"
      title="Опубликованные заявки на аренду жилья"
      :list="request === undefined ? [] : request.request"
    />
  </div>
</template>

<script src="./index.js"/>
<style src="./index.styl" lang="stylus" scoped/>
