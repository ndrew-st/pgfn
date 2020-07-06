<template>
  <div class="ap-step5">
    <p class="add-placement__h mb12">
      Параметры жилья
    </p>

    <p class="hab-request__you-can">
      Эти пункты не обязательны к заполнению, но помогут сделать заявку более точной
    </p>

    <CountBed class="mt36" />

    <ApFolding
      caption="указать Больше параметров"
      class="ap-step5__folding-block"
    >
      <CheckboxesList
        title-block="Комнаты"
        :list="rooms"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Ванная и душевая"
        :list="bathAndShower"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Тип отделки"
        :list="interior"
        :red-star="false"
        class="add-placement__mt48"
      />

      <CheckboxesList
        title-block="Высота потолков"
        :list="cellingheight"
        :red-star="false"
        class="add-placement__mt48"
      />

      <p class="add-placement__h2">
        Панорамные окна
      </p>

      <ApRadioList
        :list="panWindows"
        :checked-value="checkedWindows"
        name="panWindows"
      />

      <CheckboxesList
        title-block="Вид из окна"
        :list="viewFromTheWindow"
        :red-star="false"
        class="add-placement__mt48"
      />
    </ApFolding>

    <ApButton
      v-if="selItem !== ''"
      name="red"
      @click.native="$emit('next')"
    >
      Продолжить
    </ApButton>
  </div>
</template>

<style src="./index.styl" lang="stylus"/>

<script src="./index.js" />
