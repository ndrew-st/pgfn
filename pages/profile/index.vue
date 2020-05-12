<template>
  <div class="margin-page">
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
        <input
          type="text"
          class="input-name"
          placeholder="Новое имя"
        >
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
        <input
          type="password"
          class="input-name"
          placeholder="Новый пароль"
        >
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

    <p class="p4">
      История бронирования
    </p>

    <p class="p5">
      Пока вы не забронировали ни одного типа жилья, после бронирования жилья они отобразяться здесь.
    </p>
  </div>
</template>

<style src="./index.styl" lang="stylus" scoped>
</style>

<script src="./index.js">
</script>
