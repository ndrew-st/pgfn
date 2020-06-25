<template>
  <div class="ap-step6">
    <p class="add-placement__h ap-step6__h">
      Фотогалерея, описание
    </p>

    <p class="ap-step6__you-can">
      Вы можете не добавлять фотографии в объявление, но это скажется на его популярности. Добавляя фотографии, постарайтесь выбрать самые четкие и качественные, а описания - короткие и ёмкие.
    </p>

    <h2 class="add-placement__h2 add-placement__uppercase ap-step6__load-photo">
      Загрузите фотографии
    </h2>

    <p class="ap-step6__main-photo">
      Основное фото
    </p>

    <div class="flex">
      <ApAddPhoto class="mr24" />

      <ApAddPhoto />
    </div>

    <OcInput
      placeholder="Описание"
      class="ap-step6__oc-input-desc"
    />

    <h2 class="add-placement__h2 add-placement__uppercase ap-step6__desc">
      Описание
    </h2>

    <p class="ap-step6__give-header">
      Дайте интересный заголовок вашему объявлению, а также поделитесь полезной для гостей информацией о жилье
    </p>

    <OcInput
      placeholder="Заголовок (не более 80 символов)"
      class="ap-step6__photo-header"
    />

    <textarea
      placeholder="Описание вашего предложения (не более 1000 символов)"
      class="ap-step6__big-desc"
    />

    <ApButton
      v-if="selItem !== ''"
      name="red"
    >
      Разместить объявление
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
